const VALID_OPERATORS = ["+", "-", "*", "/"];
const validateInput = (num1, num2, operator) => {
  if (!num1 || !num2 || !operator) {
    throw new Error("Please provide three arguments: <num1> <operator> <num2>");
  }

  const n1 = Number(num1);
  const n2 = Number(num2);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Please provide valid numbers");
  }

  if (!VALID_OPERATORS.includes(operator)) {
    throw new Error(
      `Unknown operator '${operator}'. Supported: ${validOperators.join(", ")}`,
    );
  }

  return { n1, n2 };
};

export { validateInput, VALID_OPERATORS };
