import { Operation } from "./Operation.js";

/**
 * Subtraction operation
 */
export class Subtraction extends Operation {
  get symbol() {
    return "-";
  }

  execute(a, b) {
    this.validate(a, b);
    return a - b;
  }
}
