#!/usr/bin/env node

/**
 * JavaScript Code Runner
 * Execute JavaScript files from the command line
 * Usage: node coderunner.js <file.js> [args...]
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function runCode(filePath, args) {
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`Error: File not found: ${filePath}`);
      process.exit(1);
    }

    const code = fs.readFileSync(filePath, 'utf8');
    const context = {
      console,
      require,
      module: module,
      exports: exports,
      __filename: filePath,
      __dirname: path.dirname(filePath),
      process,
      Buffer,
      global,
      args: args || [],
    };

    vm.runInThisContext(code, {
      filename: filePath,
      lineOffset: 0,
      columnOffset: 0,
    });
  } catch (err) {
    console.error(`Error running ${filePath}:`);
    console.error(err.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('JavaScript Code Runner');
  console.log('Usage: node coderunner.js <file.js> [args...]');
  console.log('\nExample: node coderunner.js hello.js arg1 arg2');
  process.exit(0);
}

const filePath = args[0];
const scriptArgs = args.slice(1);
runCode(filePath, scriptArgs);
