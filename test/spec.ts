import {App, createApp} from 'appolo'
import * as request from 'supertest';
import {ThreadModule, ThreadPool} from '../'
import {Fibonacci} from "./src/fibonacci";

let should = require('chai').should();


describe("context module Spec", function () {

    let app: App;

    beforeEach(async () => {

        app = createApp({root: __dirname, environment: "production", port: 8182});

        await app.module(ThreadModule.for({threads: 1, worker: Fibonacci}));

        await app.launch();

    });

    afterEach(async () => {
        await app.reset();
    });

    it('should get context from manager', async () => {

        let result = await app.injector.get<ThreadPool<number, number>>("threadPool").run(50);

        result.should.be.eq(20365011074);

    });


});

