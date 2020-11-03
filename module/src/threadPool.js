"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadPool = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
const decorators_1 = require("./decorators");
let ThreadPool = class ThreadPool {
    async get() {
        let workers = this.discovery.getParent().findAllReflectData(decorators_1.WorkerSymbol);
        await utils_1.Promises.map(workers, (exports => this.threadPoolProvider.addWorker(exports.metaData)));
        return {};
    }
};
tslib_1.__decorate([
    inject_1.inject()
], ThreadPool.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.inject()
], ThreadPool.prototype, "discovery", void 0);
tslib_1.__decorate([
    inject_1.inject()
], ThreadPool.prototype, "threadPoolProvider", void 0);
ThreadPool = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], ThreadPool);
exports.ThreadPool = ThreadPool;
//# sourceMappingURL=threadPool.js.map