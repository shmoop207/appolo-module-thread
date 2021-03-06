import {Worker, worker} from "../../";

@worker()
export class Fibonacci extends Worker {
    async run(num: number) {
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
}



