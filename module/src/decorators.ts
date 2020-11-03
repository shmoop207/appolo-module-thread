import {Files, Reflector, Classes} from "@appolo/utils";
import {IWorkerParams} from "./interfaces";

export const WorkerSymbol = "@__workerSymbol__";


export function worker(params: IWorkerParams = {}) {
    let paths = Files.callerPaths(2);

    return function (type: any) {
        params.path = params.path || paths[1];
        params.id = Classes.className(type);
        Reflector.setMetadata(WorkerSymbol, params, type)

    }
}
