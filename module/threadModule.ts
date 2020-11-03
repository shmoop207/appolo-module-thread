import {Module, module,IModuleParams} from "@appolo/engine";
import {IOptions} from "../index";
import {PoolProvider} from "./src/poolProvider";


@module()
export class ThreadModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = {
        id: "poolProvider",
        threads: 1
    };


    public static for(options: IOptions): IModuleParams {
        return {type:ThreadModule,options};
    }

    public get exports() {
        return [{id: this._moduleOptions.id, type: PoolProvider}]

    }

}
