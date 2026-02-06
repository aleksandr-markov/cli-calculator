/**
 * Token types for expression parsing
 */
export const TokenType = {
  NUMBER: "NUMBER",
  OPERATOR: "OPERATOR",
  LEFT_PAREN: "LEFT_PAREN",
  RIGHT_PAREN: "RIGHT_PAREN",
};

/**
 * Operator configuration with precedence and associativity
 */
export class OperatorConfig {
  static operators = new Map([
    ["+", { precedence: 1, associativity: "left" }],
    ["-", { precedence: 1, associativity: "left" }],
    ["*", { precedence: 2, associativity: "left" }],
    ["/", { precedence: 2, associativity: "left" }],
    ["^", { precedence: 3, associativity: "right" }],
  ]);

  /**
   * Gets operator information
   *
   * @param {string} operator
   * @returns {{precedence: number, associativity: string} | undefined}
   */
  static getInfo(operator) {
    return this.operators.get(operator);
  }

  /**
   * Checks if character is an operator
   *
   * @param {string} char
   * @returns {boolean}
   */
  static isOperator(char) {
    return this.operators.has(char);
  }

  /**
   * Gets all operators
   *
   * @returns {string[]}
   */
  static getAllOperators() {
    return Array.from(this.operators.keys());
  }
}
