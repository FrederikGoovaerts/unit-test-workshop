export class A {
    constructor(private b: B) {}

    getValuePlusOne(): number {
        return this.b.currentValue + 1;
    }

    increaseTwice() {
        this.b.increase();
        this.b.increase();
    }
}

export interface B {
    currentValue: number;
    increase(): void;
}

export class DefaultB implements B {
    private currentCounter: number;

    constructor() {
        this.currentCounter = 0;
    }

    get currentValue(): number {
        return this.currentCounter;
    }

    increase() {
        this.currentCounter++;
    }
}
