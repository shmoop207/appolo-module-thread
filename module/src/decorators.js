"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_utils_1 = require("appolo-utils");
exports.WorkerSymbol = "@__workerSymbol__";
function worker() {
    let paths = appolo_utils_1.Files.callerPaths(2);
    return function (type) {
        appolo_utils_1.Reflector.setMetadata(exports.WorkerSymbol, paths[1], type);
    };
}
exports.worker = worker;
//# sourceMappingURL=decorators.js.map