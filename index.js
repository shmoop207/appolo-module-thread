"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.worker = exports.Worker = exports.PoolProvider = exports.ThreadPool = exports.ThreadModule = void 0;
const threadModule_1 = require("./module/threadModule");
Object.defineProperty(exports, "ThreadModule", { enumerable: true, get: function () { return threadModule_1.ThreadModule; } });
const appolo_thread_1 = require("appolo-thread");
Object.defineProperty(exports, "ThreadPool", { enumerable: true, get: function () { return appolo_thread_1.Pool; } });
Object.defineProperty(exports, "Worker", { enumerable: true, get: function () { return appolo_thread_1.Worker; } });
const decorators_1 = require("./module/src/decorators");
Object.defineProperty(exports, "worker", { enumerable: true, get: function () { return decorators_1.worker; } });
const poolProvider_1 = require("./module/src/poolProvider");
Object.defineProperty(exports, "PoolProvider", { enumerable: true, get: function () { return poolProvider_1.PoolProvider; } });
//# sourceMappingURL=index.js.map