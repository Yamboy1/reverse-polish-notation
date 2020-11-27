import { Calculation } from "./calculation.ts";
import { Lexer } from "./lexer.ts";
import { Operation } from "./operations.ts";

export class Calculator {
  #lexer: Lexer;

  constructor(operationMap: Map<string, Operation>) {
    this.#lexer = new Lexer(operationMap);
  }

  calculate(input: string) {
    const nodes = this.#lexer.parse(input);

    const calculation = new Calculation(nodes);
    return calculation.reduce();
  }
}
