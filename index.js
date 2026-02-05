import { validateInput } from "./src/validator.js";
import { calculate } from "./src/calculator.js";
import { parseArguments, showHelp, displayResult } from "./src/utils.js";

const main = () => {
  try {
    const args = parseArguments(process.argv);

    if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
      showHelp();
      process.exit(0);
    }

    const [num1Str, operator, num2Str] = args;
    const { n1, n2 } = validateInput(num1Str, num2Str, operator);

    const result = calculate(n1, n2, operator);

    displayResult(n1, operator, n2, result);

    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("\nUsage: node index.js <num1> <operator> <num2>");
    console.log("Example: node index.js 5 + 3");
    process.exit(1);
  }
};

main();
