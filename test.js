class Calculator {
    calculate(operation, a, b) {
        switch (operation) {
            case '+':
                return this.add(a, b);
            case '-':
                return this.subtract(a, b);
            case '*':
                return this.multiply(a, b);
            case '/':
                if (b === 0) {
                    throw new Error("Cannot divide by zero");
                }
                return this.divide(a, b);
            default:
                throw new Error("Invalid operation");
        }
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.calculate('+', 5, 3));      // Outputs: 8
console.log(calculator.calculate('-', 5, 3));      // Outputs: 2
console.log(calculator.calculate('*', 5, 3));      // Outputs: 15
console.log(calculator.calculate('/', 5, 3));      // Outputs: 1.6666666666666667


const Calculator = require('./Calculator'); // Assuming the Calculator class is exported from the file

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('calculate method should perform correct operation', () => {
        expect(calculator.calculate('+', 5, 3)).toBe(8);
        expect(calculator.calculate('-', 5, 3)).toBe(2);
        expect(calculator.calculate('*', 5, 3)).toBe(15);
        expect(calculator.calculate('/', 5, 3)).toBeCloseTo(1.6666666666666667);
        expect(() => calculator.calculate('/', 5, 0)).toThrow("Cannot divide by zero");
        expect(() => calculator.calculate('^', 5, 3)).toThrow("Invalid operation");
    });
});