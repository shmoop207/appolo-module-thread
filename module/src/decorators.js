"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worker = exports.WorkerSymbol = void 0;
const utils_1 = require("@appolo/utils");
exports.WorkerSymbol = "@__workerSymbol__";
function worker(params = {}) {
    let paths = utils_1.Files.callerPaths(2);
    return function (type) {
        params.path = params.path || paths[1];
        params.id = utils_1.Classes.className(type);
        utils_1.Reflector.setMetadata(exports.WorkerSymbol, params, type);
    };
}
exports.worker = worker;
//# sourceMappingURL=decorators.js.map