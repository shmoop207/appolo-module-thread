"use strict";
import {ThreadModule} from "./module/threadModule";
import {IModuleOptions} from "appolo";
import {Pool, Worker} from "appolo-thread";
import {worker} from "./module/src/decorators";

export interface IOptions extends IModuleOptions {

    id?: string
    worker?: typeof Worker,
    path?: string
    threads?: number
    maxThreadJobs?: number
}

export {ThreadModule, Pool as ThreadPool, Worker, worker}


