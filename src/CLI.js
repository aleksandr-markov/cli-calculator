import { ExpressionCalculator } from "./ExpressionCalculator.js";

/**
 * Command-line interface for the calculator
 */
export class CLI {
  constructor() {
    this.expressionCalculator = new ExpressionCalculator();
  }

  /**
   * Runs the CLI application
   * @param {string[]} args - Command-line arguments
   */
  run(args) {
    try {
      // Check for help flag
      if (this.shouldShowHelp(args)) {
        this.showHelp();
        process.exit(0);
      }

      // Join all arguments into a single expression
      const expression = args.join(" ");

      if (!expression.trim()) {
        throw new Error("Please provide an expression to evaluate");
      }

      // Evaluate expression
      const result = this.expressionCalculator.evaluate(expression);

      // Display result
      this.displayResult(expression, result);
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * Checks if help should be displayed
   * @param {string[]} args
   * @returns {boolean}
   */
  shouldShowHelp(args) {
    return args.length === 0 || args[0] === "--help" || args[0] === "-h";
  }

  /**
   * Displays help information
   */
  showHelp() {
    console.log("Features:");
    console.log("  • Basic operations: +, -, *, /, ^");
    console.log("  • Parentheses: (...)");
    console.log("  • Operator precedence: * / before + -");
    console.log("  • Power operator: ^ (right associative)");
    console.log("  • Negative numbers: -5");
    console.log("  • Decimal numbers: 3.14");
    console.log();
    console.log("Examples:");
    console.log('  npm start -- "5 + 3"');
    console.log('  npm start -- "(5 + 3) * 2"');
    console.log('  npm start -- "2 + 3 * 4"');
    console.log('  npm start -- "10 / (2 + 3)"');
    console.log('  npm start -- "-5 + 3 * 2"');
    console.log('  npm start -- "((5 + 3) * 2) - 10 / 5"');
    console.log('  npm start -- "2 ^ 3 ^ 2"');
    console.log();
    console.log("Options:");
    console.log("  --help, -h    Show this help message");
  }

  /**
   * Displays calculation result
   * @param {string} expression
   * @param {number} result
   */
  displayResult(expression, result) {
    const formattedResult = Number.isInteger(result)
      ? result.toString()
      : result.toFixed(10).replace(/\.?0+$/, "");

    console.log(`${expression} = ${formattedResult}`);
  }

  /**
   * Handles errors
   * @param {Error} error
   */
  handleError(error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(`Error: ${errorMessage}\n`);
    this.showHelp();
    process.exit(1);
  }

  /**
   * Parses arguments from process.argv
   * @param {string[]} argv
   * @returns {string[]}
   */
  static parseArguments(argv) {
    return argv.slice(2);
  }
}
