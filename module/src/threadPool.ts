import {define, singleton, factory, IFactory, inject} from "@appolo/inject";
import {Discovery} from "@appolo/engine";
import {Promises} from "@appolo/utils";
import {IOptions} from "../../index";
import {WorkerSymbol} from "./decorators";
import {IWorkerParams} from "./interfaces";
import {ThreadPoolProvider} from "./threadPoolProvider";

@define()
@singleton()
@factory()
export class ThreadPool implements IFactory<any> {
    @inject() moduleOptions: IOptions;
    @inject() discovery: Discovery;
    @inject() threadPoolProvider: ThreadPoolProvider;

    public async get() {

        let workers = this.discovery.getParent().findAllReflectData<IWorkerParams>(WorkerSymbol)

        await Promises.map(workers, (exports => this.threadPoolProvider.addWorker(exports.metaData)));

        return {}

    }
}
