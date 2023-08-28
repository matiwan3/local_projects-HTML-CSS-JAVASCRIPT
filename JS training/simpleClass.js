class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
    }

    subtract(number) {
        this.result -= number;
    }

    multiply(number) {
        this.result *= number;
    }

    divide(number) {
        if (number !== 0) {
            this.result /= number;
        } else {
            console.error("Division by zero is not allowed.");
        }
    }

    getResult() {
        return this.result;
    }
}

// Create an instance of the Calculator class
const myCalculator = new Calculator();

// Use the methods of the instance
myCalculator.add(5);
myCalculator.subtract(3);
myCalculator.multiply(10);
myCalculator.divide(2);

console.log("Result:", myCalculator.getResult()); // Output: Result: 10
