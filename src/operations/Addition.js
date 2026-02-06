import { Operation } from "./Operation.js";

/**
 * Addition operation
 */
export class Addition extends Operation {
  get symbol() {
    return "+";
  }

  execute(a, b) {
    this.validate(a, b);
    return a + b;
  }
}
