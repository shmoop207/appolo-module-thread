"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
const __1 = require("../");
const fibonacci_1 = require("./src/fibonacci");
let should = require('chai').should();
describe("context module Spec", function () {
    let app;
    beforeEach(async () => {
        app = appolo_1.createApp({ root: __dirname, environment: "production", port: 8182 });
        await app.module(__1.ThreadModule.for({ threads: 1, worker: fibonacci_1.Fibonacci }));
        await app.launch();
    });
    afterEach(async () => {
        await app.reset();
    });
    it('should get context from manager', async () => {
        let result = await app.injector.get("threadPool").run(50);
        result.should.be.eq(20365011074);
    });
});
//# sourceMappingURL=spec.js.map