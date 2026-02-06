import { Calculator } from "./calculator.js";
import { Tokenizer } from "./parser/Tokenizer.js";
import { ShuntingYard } from "./parser/ShuntingYard.js";
import { RPNCalculator } from "./parser/RPNCalculator.js";

/**
 * Expression Calculator - evaluates mathematical expressions
 */
export class ExpressionCalculator {
  constructor() {
    this.calculator = new Calculator();
    this.rpnCalculator = new RPNCalculator(this.calculator);
  }

  /**
   * Evaluates a mathematical expression
   * @param {string} expression - Expression string (e.g., "(5 + 3) * 2")
   * @returns {number} Result of the evaluation
   */
  evaluate(expression) {
    // Step 1: Tokenize
    const tokenizer = new Tokenizer(expression);
    const tokens = tokenizer.tokenize();

    // Step 2: Convert to RPN using Shunting Yard
    const rpnTokens = ShuntingYard.toRPN(tokens);

    // Step 3: Evaluate RPN
    const result = this.rpnCalculator.evaluate(rpnTokens);

    return result;
  }

  /**
   * Gets the underlying calculator (for adding custom operations)
   * @returns {Calculator}
   */
  getCalculator() {
    return this.calculator;
  }
}
