// Example JavaScript file to test the coderunner
// Run with: node test-runner.js

console.log('=== JavaScript Code Runner Test ===\n');

// Test 1: Basic output
console.log('✓ Test 1: Basic console output');
console.log('  Node.js is working!\n');

// Test 2: Variables and calculations
console.log('✓ Test 2: Variables and calculations');
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log(`  ${num1} + ${num2} = ${sum}\n`);

// Test 3: Arrays and loops
console.log('✓ Test 3: Arrays and loops');
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit, i) => {
  console.log(`  ${i + 1}. ${fruit}`);
});
console.log();

// Test 4: Objects
console.log('✓ Test 4: Objects');
const user = {
  name: 'Developer',
  language: 'JavaScript',
  year: 2026
};
console.log(`  Name: ${user.name}`);
console.log(`  Language: ${user.language}`);
console.log(`  Year: ${user.year}\n`);

// Test 5: Functions
console.log('✓ Test 5: Functions');
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(`  ${greet('World')}\n`);

// Test 6: Process arguments
console.log('✓ Test 6: Command-line arguments');
const args = process.argv.slice(2);
if (args.length > 0) {
  console.log(`  Received arguments: ${args.join(', ')}\n`);
} else {
  console.log(`  No additional arguments provided\n`);
}

console.log('=== All tests passed! ===');
