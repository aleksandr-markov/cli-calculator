import { Operation } from "./Operation.js";

/**
 * Division operation
 */
export class Division extends Operation {
  get symbol() {
    return "/";
  }

  execute(a, b) {
    this.validate(a, b);

    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }

    return a / b;
  }
}
