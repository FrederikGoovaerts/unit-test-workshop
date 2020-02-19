import { B, DefaultB, A } from "../../src/example/source";

class MockB implements B {
    get currentValue() {
        return 0;
    }

    increase() {}
}

describe("Class B", () => {
    let b: B;

    beforeEach(() => {
        b = new DefaultB();
    });

    it("should initially have value zero", () => {
        expect(b.currentValue).toBe(0);
    });

    describe("when calling increase()", () => {
        let previousValue: number;
        beforeEach(() => {
            previousValue = b.currentValue;
            b.increase();
        });

        it("should increase the value by one", () => {
            expect(b.currentValue).toBe(previousValue + 1);
        });
    });
});

describe("Class A", () => {
    let a: A;
    let bMock: B;

    beforeEach(() => {
        bMock = new MockB();
        a = new A(bMock);
    });

    describe("when calling getValuePlusOne()", () => {
        let bValue: number;
        let result: number;
        beforeEach(() => {
            bValue = Math.ceil(Math.random() * 100);
            spyOnProperty(bMock, "currentValue").and.returnValue(bValue);
            result = a.getValuePlusOne();
        });

        it("should return b's current value plus one for ", () => {
            expect(result).toBe(bValue + 1);
        });
    });

    describe("when calling increaseTwice()", () => {
        let increaseSpy: jasmine.Spy;

        beforeEach(() => {
            increaseSpy = spyOn(bMock, "increase");
            a.increaseTwice();
        });

        it("should increase the value of b twice", () => {
            expect(increaseSpy).toHaveBeenCalledTimes(2);
        });
    });
});
