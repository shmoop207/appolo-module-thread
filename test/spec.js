"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@appolo/core");
const __1 = require("../");
const fibonacci_1 = require("./src/fibonacci");
let should = require('chai').should();
describe("context module Spec", function () {
    let app;
    beforeEach(async () => {
        app = core_1.createApp({ root: __dirname, environment: "production", port: 8182 });
        app.module.use(__1.ThreadModule.for({ threads: 1, worker: fibonacci_1.Fibonacci }));
        await app.launch();
    });
    afterEach(async () => {
        await app.reset();
    });
    it('should get context from manager', async () => {
        let threadPoolProvider = await app.injector.get(__1.ThreadPoolProvider);
        let result = await threadPoolProvider.getPool(fibonacci_1.Fibonacci).run(50);
        result.should.be.eq(20365011074);
    });
});
//# sourceMappingURL=spec.js.map