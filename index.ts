"use strict";
import {ThreadModule} from "./module/threadModule";
import {Pool, Worker} from "appolo-thread";
import {worker} from "./module/src/decorators";
import {PoolProvider} from "./module/src/poolProvider";

export interface IOptions {

    id?: string
    threads?: number
    maxThreadJobs?: number
}

export {ThreadModule, Pool as ThreadPool, PoolProvider, Worker, worker}


