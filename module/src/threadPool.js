"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const appolo_thread_1 = require("appolo-thread");
const appolo_utils_1 = require("appolo-utils");
const decorators_1 = require("./decorators");
let ThreadPool = class ThreadPool {
    async get() {
        if (!this.moduleOptions.path && !this.moduleOptions.worker) {
            throw new Error("no worker or thread defined");
        }
        let path = this.moduleOptions.path;
        if (!path) {
            path = appolo_utils_1.Reflector.getFnMetadata(decorators_1.WorkerSymbol, this.moduleOptions.worker.constructor);
        }
        if (!path) {
            throw new Error("invalid worker path");
        }
        const pool = new appolo_thread_1.Pool({
            path: path,
            threads: this.moduleOptions.threads,
            maxThreadJobs: this.moduleOptions.maxThreadJobs
        });
        await pool.initialize();
        return pool;
    }
};
tslib_1.__decorate([
    appolo_1.inject()
], ThreadPool.prototype, "moduleOptions", void 0);
ThreadPool = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton(),
    appolo_1.factory()
], ThreadPool);
exports.ThreadPool = ThreadPool;
//# sourceMappingURL=threadPool.js.map