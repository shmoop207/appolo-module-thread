"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const threadModule_1 = require("./module/threadModule");
exports.ThreadModule = threadModule_1.ThreadModule;
const appolo_thread_1 = require("appolo-thread");
exports.ThreadPool = appolo_thread_1.Pool;
exports.Worker = appolo_thread_1.Worker;
const decorators_1 = require("./module/src/decorators");
exports.worker = decorators_1.worker;
//# sourceMappingURL=index.js.map