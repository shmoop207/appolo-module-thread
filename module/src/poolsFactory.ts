import {define, singleton, factory, IFactory, inject} from "@appolo/inject";
import {Discovery} from "@appolo/engine";
import {Promises} from "@appolo/utils";
import {IOptions} from "../../index";
import {WorkerSymbol} from "./decorators";
import {IWorkerParams} from "./interfaces";
import {PoolProvider} from "./poolProvider";

@define()
@singleton()
@factory()
export class PoolsFactory implements IFactory<void> {
    @inject() moduleOptions: IOptions;
    @inject() discovery: Discovery;
    @inject() poolProvider: PoolProvider;

    public async get() {

        let workers = this.discovery.getParent().findAllReflectData<IWorkerParams>(WorkerSymbol)

        await Promises.map(workers, (exports => this.poolProvider.addWorker(exports.metaData)));
    }
}
