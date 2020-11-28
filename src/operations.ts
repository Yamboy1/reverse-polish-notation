export type Operation = (a: number, b: number) => number;

export const operations = new Map<string, Operation>([
  ["+", (a, b) => a + b],
  ["-", (a, b) => a - b],
  ["*", (a, b) => a * b],
  ["/", (a, b) => a / b],
]);
