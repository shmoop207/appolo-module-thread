import {App, createApp} from '@appolo/core'
import * as request from 'supertest';
import {ThreadModule, ThreadPool, ThreadPoolProvider} from '../'
import {Fibonacci} from "./src/fibonacci";

let should = require('chai').should();


describe("context module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: __dirname, environment: "production", port: 8182});

        app.module.use(ThreadModule.for({threads: 1, worker: Fibonacci}));

        await app.launch();

    });

    afterEach(async () => {
        await app.reset();
    });

    it('should get context from manager', async () => {

        let threadPoolProvider = await app.injector.get<ThreadPoolProvider>(ThreadPoolProvider);

        let result = await threadPoolProvider.getPool(Fibonacci).run(50)
        result.should.be.eq(20365011074);

    });


});

