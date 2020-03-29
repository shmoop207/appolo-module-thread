import {Files, Reflector} from "appolo-utils";

export const WorkerSymbol = "@__workerSymbol__";


export function worker() {
    let paths = Files.callerPaths(2);
    return function (type: any) {


        Reflector.setMetadata(WorkerSymbol, paths[1], type)

    }
}
