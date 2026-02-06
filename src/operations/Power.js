import { Operation } from "./Operation.js";

/**
 * Power (exponentiation) operation
 */
export class Power extends Operation {
  get symbol() {
    return "^";
  }

  execute(a, b) {
    this.validate(a, b);
    return Math.pow(a, b);
  }
}
