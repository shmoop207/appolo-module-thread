"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolsFactory = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
const decorators_1 = require("./decorators");
let PoolsFactory = class PoolsFactory {
    async get() {
        let workers = this.discovery.getParent().findAllReflectData(decorators_1.WorkerSymbol);
        await utils_1.Promises.map(workers, (exports => this.poolProvider.addWorker(exports.metaData)));
    }
};
tslib_1.__decorate([
    inject_1.inject()
], PoolsFactory.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.inject()
], PoolsFactory.prototype, "discovery", void 0);
tslib_1.__decorate([
    inject_1.inject()
], PoolsFactory.prototype, "poolProvider", void 0);
PoolsFactory = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], PoolsFactory);
exports.PoolsFactory = PoolsFactory;
//# sourceMappingURL=poolsFactory.js.map