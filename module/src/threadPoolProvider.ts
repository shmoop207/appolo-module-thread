import {define, singleton, factory, IFactory, inject} from "@appolo/inject";
import {Discovery} from "@appolo/engine";
import {Pool, Worker} from "appolo-thread";
import {Classes} from "@appolo/utils";
import {IOptions} from "../../index";
import {WorkerSymbol} from "./decorators";
import {IWorkerParams} from "./interfaces";

@define()
@singleton()
export class ThreadPoolProvider {

    private _pools = new Map<string, Pool<any, any>>();
    @inject() private moduleOptions: IOptions;

    public async addWorker(params: IWorkerParams) {
        const pool = new Pool<any, any>({
            path: params.path,
            threads: params.threads || this.moduleOptions.threads || 1,
            maxThreadJobs: params.maxThreadJobs || this.moduleOptions.maxThreadJobs || Number.MAX_SAFE_INTEGER
        });

        this._pools.set(params.id, pool);

        await pool.initialize();
    }

    public getPool<T, K>(id: string | typeof Worker): Pool<T, K> {
        if (typeof id !== "string") {

            id = Classes.className(id as Function);
        }
        return this._pools.get(id);
    }
}
