import { TokenType, OperatorConfig } from "./Token.js";

/**
 * Tokenizer - converts expression string into tokens
 */
export class Tokenizer {
  constructor(expression) {
    this.expression = expression;
    this.position = 0;
  }

  tokenize() {
    const tokens = [];

    while (this.position < this.expression.length) {
      const char = this.peek();

      if (/\s/.test(char)) {
        this.position++;
        continue;
      }

      if (this.isDigit(char) || char === ".") {
        tokens.push(this.readNumber());
        continue;
      }

      if (OperatorConfig.isOperator(char)) {
        tokens.push(this.handleOperator(char, tokens));
        continue;
      }

      const parenType = {
        "(": TokenType.LEFT_PAREN,
        ")": TokenType.RIGHT_PAREN,
      }[char];

      if (parenType) {
        tokens.push({ type: parenType, value: char });
        this.position++;
        continue;
      }

      throw new Error(
        `Unexpected character: '${char}' at position ${this.position}`,
      );
    }

    return tokens;
  }

  peek() {
    return this.expression[this.position];
  }

  handleParen(char) {
    this.position++;

    return {
      type: char === "(" ? TokenType.LEFT_PAREN : TokenType.RIGHT_PAREN,
      value: char,
    };
  }

  handleOperator(char, tokens) {
    if (char === "-" && this.checkIsUnary(tokens)) {
      this.position++;
      const next = this.peek();
      if (this.isDigit(next) || next === ".") {
        return this.readNumber(true);
      }
      return { type: TokenType.UNARY_MINUS, value: "-" };
    }

    this.position++;
    return { type: TokenType.OPERATOR, value: char };
  }

  /**
   * Reads a number token (including decimals and negative numbers)
   * @param {boolean} isNegative
   * @returns {{type: string, value: string}}
   */
  readNumber(isNegative = false) {
    let numStr = "";

    if (isNegative) {
      numStr = "-";
      this.position++; // Skip the minus sign
    }

    while (
      this.position < this.expression.length &&
      (this.isDigit(this.expression[this.position]) ||
        this.expression[this.position] === ".")
    ) {
      numStr += this.expression[this.position];
      this.position++;
    }

    if (numStr === "" || numStr === "-" || numStr === ".") {
      throw new Error(`Invalid number at position ${this.position}`);
    }

    return { type: TokenType.NUMBER, value: numStr };
  }

  /**
   * Checks if a character is a digit
   * @param {string} char
   * @returns {boolean}
   */
  isDigit(char) {
    return /[0-9]/.test(char);
  }

  /**
   * Checks if the minus sign is unary
   * @param {Array} tokens
   * @returns {boolean}
   */
  checkIsUnary(tokens) {
    if (tokens.length === 0) return true;

    const lastToken = tokens[tokens.length - 1];

    return (
      lastToken.type === TokenType.OPERATOR ||
      lastToken.type === TokenType.LEFT_PAREN
    );
  }
}
