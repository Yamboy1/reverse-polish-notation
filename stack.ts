import { StackTooBigError, StackTooSmallError } from "./errors.ts";

export class Stack<T> {
  #arr: Array<T> = [];

  single(): T {
    if (this.#arr.length !== 1) {
      throw new StackTooBigError(
        "Stack needs to be reduced to a single number to output a value",
      );
    }

    return this.#arr[0];
  }

  push(item: T): void {
    this.#arr.push(item);
  }

  pop(): T {
    const item = this.#arr.pop();
    if (item === undefined) {
      throw new StackTooSmallError("Need at least 1 item to pop");
    }
    return item;
  }

  pop2(): [T, T] {
    try {
      const last = this.pop();
      const secondToLast = this.pop();

      return [secondToLast, last];
    } catch (e) {
      if (e instanceof StackTooSmallError) {
        throw new StackTooSmallError("Need at least 2 items to pop");
      }
      throw e;
    }
  }
}
