import { InvalidTokenError } from "./errors.ts";
import { Operation } from "./operations.ts";

export class Node<T> {
  value: T;
  index: number;

  constructor(value: T, index: number) {
    this.value = value;
    this.index = index;
  }
}

export class Operator {
  operation: Operation;
  name: string;

  constructor(name: string, operation: Operation) {
    this.name = name;
    this.operation = operation;
  }

  toString() {
    return this.name;
  }
}

export class Lexer {
  #operationMap: Map<string, Operation>;

  constructor(operationMap: Map<string, Operation>) {
    this.#operationMap = operationMap;
  }

  parse(input: string): Node<number | Operator>[] {
    const list = input.split(/\s/);

    return list.map((element, index) => {
      const number = Number(element);

      if (!Number.isNaN(number)) {
        return new Node(number, index);
      } else {
        const operation = this.#operationMap.get(element) ?? null;
        if (operation === null) {
          throw new InvalidTokenError(`Invalid token "${element}"`);
        }

        return new Node(
          new Operator(element, operation),
          index,
        );
      }
    });
  }
}
