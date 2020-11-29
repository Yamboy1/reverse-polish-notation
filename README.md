# Reverse Polish Notation Calculator

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/rpn-calculator)


A simple [RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation) calculator library written in Deno.

## Example

For a simple repl showing off this library, you can run:
```bash
$ deno run https://x.nest.land/rpn-calculator@1.0.0/repl.ts
```

Here are some example calculations to input: `1 1 +`, `12 1 3 + *`

## Usage

```js
import { Calculator } from "https://x.nest.land/rpn-calculator@1.0.0/mod.ts"

const calculator = new Calculator();

// To get the result
console.log(calculator.calculate("1 1 +"));

// To view the steps as well
console.log(calculator.showSteps("1 2 3 + +"));
```

## License
This library is licensed under the [MIT License](./LICENSE).

##### (c) Yamboy1 2020
