"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadPoolProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const appolo_thread_1 = require("appolo-thread");
const utils_1 = require("@appolo/utils");
let ThreadPoolProvider = class ThreadPoolProvider {
    constructor() {
        this._pools = new Map();
    }
    async addWorker(params) {
        const pool = new appolo_thread_1.Pool({
            path: params.path,
            threads: params.threads || this.moduleOptions.threads || 1,
            maxThreadJobs: params.maxThreadJobs || this.moduleOptions.maxThreadJobs || Number.MAX_SAFE_INTEGER
        });
        this._pools.set(params.id, pool);
        await pool.initialize();
    }
    getPool(id) {
        if (typeof id !== "string") {
            id = utils_1.Classes.className(id);
        }
        return this._pools.get(id);
    }
};
tslib_1.__decorate([
    inject_1.inject()
], ThreadPoolProvider.prototype, "moduleOptions", void 0);
ThreadPoolProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], ThreadPoolProvider);
exports.ThreadPoolProvider = ThreadPoolProvider;
//# sourceMappingURL=threadPoolProvider.js.map