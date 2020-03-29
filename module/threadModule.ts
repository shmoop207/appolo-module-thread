import {Module, module} from "appolo/index";
import {IOptions} from "../index";
import {ThreadPool} from "./src/threadPool";


@module()
export class ThreadModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = {
        id: "threadPool",
        threads: 1
    };

    constructor(opts: IOptions) {
        super(opts);
    }

    public static for(opts: IOptions): ThreadModule {
        return new ThreadModule(opts);
    }

    public get exports() {
        return [{id: this._moduleOptions.id, type: ThreadPool}]

    }

}
