import { Stack } from "./stack.ts";
import { Node, Operator } from "./lexer.ts";

export class Calculation {
  #stack = new Stack<Node<number>>();
  readonly #nodes: Node<number | Operator>[];

  #steps : Map<number, number | Operator| null>;
  #allSteps: string[] = []

  constructor(nodes: Node<number | Operator>[]) {
    this.#nodes = nodes;
    this.#steps = new Map(nodes.map(node => [node.index, node.value]));
  }

  // @ts-ignore
  #calculate(): [number, string] {
    for (const node of this.#nodes) {
      const { index, value } = node;

      if (typeof value === "number") {
        this.#stack.push(node as Node<number>);
      } else {
        const elements = this.#stack.pop2();

        for (const element of elements) {
          this.#steps.set(element.index,null);
        }

        const result = value.operation(elements[0].value, elements[1].value);

        this.#steps.set(node.index, result);
        this.#stack.push(new Node(result, index));

        this.#allSteps.push([...this.#steps.values()].filter(value => value !== null).join(" "))
      }
    }


    return [this.#stack.single().value, this.#allSteps.join("\n")];
  }

  reduce() {
    return this.#calculate()[0];
  }

  getSteps() {
    return this.#calculate()[1];
  }

}
