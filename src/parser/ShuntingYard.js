import { TokenType, OperatorConfig } from "./Token.js";

/**
 * Shunting Yard algorithm - converts infix notation to RPN
 */
export class ShuntingYard {
  /**
   * Converts infix tokens to RPN tokens
   * @param {Array} tokens
   * @returns {Array}
   */
  static toRPN(tokens) {
    const output = [];
    const operatorStack = [];

    for (const token of tokens) {
      switch (token.type) {
        case TokenType.NUMBER:
          output.push(token);
          break;

        case TokenType.OPERATOR:
          this.handleOperator(token, operatorStack, output);
          break;

        case TokenType.LEFT_PAREN:
          operatorStack.push(token);
          break;

        case TokenType.RIGHT_PAREN:
          this.handleRightParen(operatorStack, output);
          break;
      }
    }

    // Pop remaining operators
    while (operatorStack.length > 0) {
      const op = operatorStack.pop();
      if (op.type === TokenType.LEFT_PAREN) {
        throw new Error("Mismatched parentheses");
      }
      output.push(op);
    }

    return output;
  }

  /**
   * Handles operator token
   * @param {Object} token
   * @param {Array} operatorStack
   * @param {Array} output
   */
  static handleOperator(token, operatorStack, output) {
    const tokenInfo = OperatorConfig.getInfo(token.value);
    if (!tokenInfo) {
      throw new Error(`Unknown operator: ${token.value}`);
    }

    while (operatorStack.length > 0) {
      const top = operatorStack[operatorStack.length - 1];

      if (top.type !== TokenType.OPERATOR) break;

      const topInfo = OperatorConfig.getInfo(top.value);
      if (!topInfo) break;

      // Check precedence and associativity
      const shouldPop =
        topInfo.precedence > tokenInfo.precedence ||
        (topInfo.precedence === tokenInfo.precedence &&
          tokenInfo.associativity === "left");

      if (!shouldPop) break;

      output.push(operatorStack.pop());
    }

    operatorStack.push(token);
  }

  /**
   * Handles right parenthesis
   * @param {Array} operatorStack
   * @param {Array} output
   */
  static handleRightParen(operatorStack, output) {
    let foundLeftParen = false;

    while (operatorStack.length > 0) {
      const op = operatorStack.pop();

      if (op.type === TokenType.LEFT_PAREN) {
        foundLeftParen = true;
        break;
      }

      output.push(op);
    }

    if (!foundLeftParen) {
      throw new Error("Mismatched parentheses");
    }
  }
}
