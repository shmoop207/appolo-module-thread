"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolProvider = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const appolo_thread_1 = require("appolo-thread");
const utils_1 = require("@appolo/utils");
let PoolProvider = class PoolProvider {
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
    async run(worker, params) {
        let pool = this.getPool(worker);
        let result = await pool.run(params);
        return result;
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
], PoolProvider.prototype, "moduleOptions", void 0);
PoolProvider = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], PoolProvider);
exports.PoolProvider = PoolProvider;
//# sourceMappingURL=poolProvider.js.map