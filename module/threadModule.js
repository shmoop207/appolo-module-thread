"use strict";
var ThreadModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("appolo/index");
const threadPool_1 = require("./src/threadPool");
let ThreadModule = ThreadModule_1 = class ThreadModule extends index_1.Module {
    constructor(opts) {
        super(opts);
        this.Defaults = {
            id: "threadPool",
            threads: 1
        };
    }
    static for(opts) {
        return new ThreadModule_1(opts);
    }
    get exports() {
        return [{ id: this._moduleOptions.id, type: threadPool_1.ThreadPool }];
    }
};
ThreadModule = ThreadModule_1 = tslib_1.__decorate([
    index_1.module()
], ThreadModule);
exports.ThreadModule = ThreadModule;
//# sourceMappingURL=threadModule.js.map