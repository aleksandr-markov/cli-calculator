/**
 * Calculator CLI - Entry point (OOP version)
 */

import { CLI } from "./src/CLI.js";

// Parse arguments and run CLI
const args = CLI.parseArguments(process.argv);
const cli = new CLI();
cli.run(args);
