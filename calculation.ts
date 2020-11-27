import { Stack } from "./stack.ts";
import { Node } from "./lexer.ts";

export class Calculation {
  #stack = new Stack<number>();
  #nodes: Node[];

  constructor(nodes: Node[]) {
    this.#nodes = nodes;
  }

  reduce(): number {
    for (const node of this.#nodes) {
      if (typeof node === "number") {
        this.#stack.push(node);
      } else {
        const elements = this.#stack.pop2();
        const result = node.operation(...elements);
        this.#stack.push(result);
      }
    }

    return this.#stack.single();
  }


}
