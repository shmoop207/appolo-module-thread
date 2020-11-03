"use strict";
var ThreadModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const poolProvider_1 = require("./src/poolProvider");
let ThreadModule = ThreadModule_1 = class ThreadModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            id: "poolProvider",
            threads: 1
        };
    }
    static for(options) {
        return { type: ThreadModule_1, options };
    }
    get exports() {
        return [{ id: this._moduleOptions.id, type: poolProvider_1.PoolProvider }];
    }
};
ThreadModule = ThreadModule_1 = tslib_1.__decorate([
    engine_1.module()
], ThreadModule);
exports.ThreadModule = ThreadModule;
//# sourceMappingURL=threadModule.js.map