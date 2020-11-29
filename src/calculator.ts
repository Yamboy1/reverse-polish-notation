import { Calculation } from "./calculation.ts";
import { Lexer } from "./lexer.ts";
import { operations } from "./operations.ts";

export class Calculator {
  #lexer: Lexer;

  constructor(operationMap = operations) {
    this.#lexer = new Lexer(operationMap);
  }

  calculate(input: string) {
    const nodes = this.#lexer.parse(input);

    const calculation = new Calculation(nodes);
    return calculation.reduce();
  }

  showSteps(input: string) {
    const nodes = this.#lexer.parse(input);

    const calculation = new Calculation(nodes);
    return calculation.getSteps();
  }
}
