"use strict";
import {ThreadModule} from "./module/threadModule";
import {Pool, Worker} from "appolo-thread";
import {worker} from "./module/src/decorators";
import {ThreadPoolProvider} from "./module/src/threadPoolProvider";

export interface IOptions {

    id?: string
    worker?: typeof Worker,
    path?: string
    threads?: number
    maxThreadJobs?: number
}

export {ThreadModule, Pool as ThreadPool, ThreadPoolProvider, Worker, worker}


