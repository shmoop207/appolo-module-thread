import {define, singleton, factory, IFactory, module, inject} from "appolo";
import {Pool} from "appolo-thread";
import {Reflector} from "appolo-utils";
import {IOptions} from "../../index";
import {WorkerSymbol} from "./decorators";

@define()
@singleton()
@factory()
export class ThreadPool implements IFactory<Pool<any, any>> {
    @inject() moduleOptions: IOptions;

    public async get() {

        if (!this.moduleOptions.path && !this.moduleOptions.worker) {
            throw new Error("no worker or thread defined")
        }

        let path = this.moduleOptions.path;

        if (!path) {
            path = Reflector.getFnMetadata(WorkerSymbol, this.moduleOptions.worker.constructor);
        }

        if (!path) {
            throw new Error("invalid worker path")
        }

        const pool = new Pool({
            path: path,
            threads: this.moduleOptions.threads,
            maxThreadJobs: this.moduleOptions.maxThreadJobs
        });

        await pool.initialize();

        return pool

    }
}
