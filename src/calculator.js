import { Addition } from "./operations/Addition.js";
import { Subtraction } from "./operations/Subtraction.js";
import { Multiplication } from "./operations/Multiplication.js";
import { Division } from "./operations/Division.js";
import { Power } from "./operations/Power.js";

/**
 * Calculator class - manages operations
 */
export class Calculator {
  constructor() {
    this.operations = new Map();
    this.registerOperations();
  }

  /**
   * Registers all available operations
   */
  registerOperations() {
    const operations = [
      new Addition(),
      new Subtraction(),
      new Multiplication(),
      new Division(),
      new Power(),
    ];

    operations.forEach((operation) => {
      this.operations.set(operation.symbol, operation);
    });
  }

  /**
   * Performs calculation
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @param {string} operatorSymbol - Operator symbol
   * @returns {number} Result of calculation
   */
  calculate(num1, num2, operatorSymbol) {
    const operation = this.operations.get(operatorSymbol);

    if (!operation) {
      throw new Error(`Operation '${operatorSymbol}' is not supported`);
    }

    return operation.execute(num1, num2);
  }

  /**
   * Gets all available operators
   * @returns {string[]}
   */
  getAvailableOperators() {
    return Array.from(this.operations.keys());
  }

  /**
   * Adds a custom operation
   * @param {Operation} operation - Custom operation to add
   */
  addOperation(operation) {
    this.operations.set(operation.symbol, operation);
  }
}
