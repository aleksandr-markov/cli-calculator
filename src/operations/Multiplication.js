import { Operation } from "./Operation.js";

/**
 * Multiplication operation
 */
export class Multiplication extends Operation {
  get symbol() {
    return "*";
  }

  execute(a, b) {
    this.validate(a, b);
    return a * b;
  }
}
