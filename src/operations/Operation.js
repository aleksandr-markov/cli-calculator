/**
 * Abstract base class for all mathematical operations
 */
export class Operation {
  /**
   * Executes the operation
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @returns {number} Result of the operation
   */
  execute(a, b) {
    throw new Error("Method execute() must be implemented");
  }

  /**
   * Gets the symbol for this operation
   * @returns {string}
   */
  get symbol() {
    throw new Error("Property symbol must be implemented");
  }

  /**
   * Validates the operands
   * @param {number} a - First operand
   * @param {number} b - Second operand
   */
  validate(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Invalid operands: must be numbers");
    }
  }
}
