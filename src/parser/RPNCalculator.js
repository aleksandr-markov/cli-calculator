import { TokenType } from "./Token.js";

/**
 * RPN Calculator - evaluates Reverse Polish Notation expressions
 */
export class RPNCalculator {
  constructor(calculator) {
    this.calculator = calculator;
  }

  /**
   * Evaluates RPN tokens
   * @param {Array} rpnTokens
   * @returns {number}
   */
  evaluate(rpnTokens) {
    const stack = [];

    for (const token of rpnTokens) {
      if (token.type === TokenType.NUMBER) {
        stack.push(parseFloat(token.value));
      }

      if (token.type === TokenType.OPERATOR) {
        if (stack.length < 2) {
          throw new Error("Invalid expression: not enough operands");
        }

        const b = stack.pop();
        const a = stack.pop();

        const result = this.calculator.calculate(a, b, token.value);
        stack.push(result);
      }
    }

    if (stack.length !== 1) {
      throw new Error("Invalid expression: too many operands");
    }

    return stack[0];
  }
}
