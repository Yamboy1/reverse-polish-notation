import { InvalidToken } from "./errors.ts";
import { Operation } from "./operations.ts";

export type Node = number | Operator;

export class Operator {
  operation: Operation;
  name: string;

  constructor(name: string, operation: Operation) {
    this.name = name;
    this.operation = operation;
  }
}

export class Lexer {
  #operationMap: Map<string, Operation>;

  constructor(operationMap: Map<string, Operation>) {
    this.#operationMap = operationMap;
  }

  parse(input: string): Node[] {
    const list = input.split(/\s/);

    return list.map((element) => {
      const number = Number(element);

      if (!Number.isNaN(number)) {
        return number;
      } else {
        const operation = this.#operationMap.get(element) ?? null;
        if (operation === null) {
          throw new InvalidToken(`Invalid token "${element}"`);
        }

        return new Operator(element, operation);
      }
    });
  }
}
