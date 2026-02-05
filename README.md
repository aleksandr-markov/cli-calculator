# Calculator CLI

A simple command-line calculator built with Node.js using ES Modules.

## 📋 Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Support for decimal and negative numbers
- Input validation
- Error handling (division by zero, invalid operators, etc.)
- Built-in help documentation

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/aleksandr-markov/cli-calculator.git
cd calculator-cli
```

2. Make sure Node.js is installed (version 12 or higher):

```bash
node --version
```

## 💻 Usage

### Basic Syntax

```bash
node index.js <number1> <operator> <number2>
```

### Examples

```bash
# Addition
node index.js 5 + 3
# Output: 5 + 3 = 8

# Subtraction
node index.js 10 - 3
# Output: 10 - 3 = 7

# Multiplication
node index.js 6 * 7
# Output: 6 * 7 = 42

# Division
node index.js 15 / 3
# Output: 15 / 3 = 5

# Decimal numbers
node index.js 5.5 + 2.3
# Output: 5.5 + 2.3 = 7.8

# Negative numbers
node index.js -5 + 3
# Output: -5 + 3 = -2
```

### Help

```bash
node index.js --help
# or
node index.js -h
```
