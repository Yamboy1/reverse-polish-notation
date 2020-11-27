import { Calculator } from "./calculator.ts";
import { operations } from "./operations.ts";

const calculator = new Calculator(operations);

console.log(calculator.calculate("4 2 +"));
console.log(calculator.calculate("4 2 21 - *"));
