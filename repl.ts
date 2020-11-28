import { Calculator } from "./calculator.ts";

const calculator = new Calculator();

console.log("press ctrl-c to exit")

while (true) {
  const input = prompt(">");
  if (input === null) continue;

  try {
    console.log(calculator.calculate(input));
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    console.error("%s: %s", e.name, e.message)
  }
}
