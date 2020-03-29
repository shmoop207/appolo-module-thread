"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __1 = require("../../");
let Fibonacci = class Fibonacci extends __1.Worker {
    async run(num) {
        let a = 1, b = 0, temp;
        while (num >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        this.postMessage("working");
        return b;
    }
};
Fibonacci = tslib_1.__decorate([
    __1.worker()
], Fibonacci);
exports.Fibonacci = Fibonacci;
//# sourceMappingURL=fibonacci.js.map