export const parseArguments = (argv) => {
  return argv.slice(2);
};

export const displayResult = (num1, operator, num2, result) => {
  console.log(`${num1} ${operator} ${num2} = ${result}`);
};

export const showHelp = () => {
  console.log("╔════════════════════════════════════════╗");
  console.log("║        Calculator CLI v1.0.0           ║");
  console.log("╚════════════════════════════════════════╝");
  console.log();
  console.log("Usage: node index.js <num1> <operator> <num2>");
  console.log();
  console.log("Operators:");
  console.log("  +    Addition");
  console.log("  -    Subtraction");
  console.log("  *    Multiplication");
  console.log("  /    Division");
  console.log();
  console.log("Examples:");
  console.log("  node index.js 5 + 3");
  console.log("  node index.js 10.5 - 2.3");
  console.log("  node index.js 6 * 7");
  console.log("  node index.js 15 / 3");
  console.log();
  console.log("Options:");
  console.log("  --help, -h    Show this help message");
};
