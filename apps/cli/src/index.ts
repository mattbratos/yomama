#!/usr/bin/env node

const args = process.argv.slice(2);

const VERSION = "0.1.0";

const HELP = `
yomama - rent your mama from the terminal

Usage:
  yomama [command] [options]

Commands:
  joke        Get a random yo mama joke

Options:
  --help      Show this help message
  --version   Show version number
`.trim();

if (args.includes("--help") || args.includes("-h") || args.length === 0) {
  console.log(HELP);
  process.exit(0);
}

if (args.includes("--version") || args.includes("-v")) {
  console.log(VERSION);
  process.exit(0);
}

const command = args[0];

switch (command) {
  case "joke":
    console.log("Yo mama so kind, she rents herself out to help everyone!");
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.log(HELP);
    process.exit(1);
}
