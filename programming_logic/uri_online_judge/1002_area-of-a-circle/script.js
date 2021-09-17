const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const sample = input.split('\n');

const radius = parseFloat(sample.shift());

const pi = 3.14159;

function calculateCircleArea() {
  return pi * Math.pow(radius, 2);
}

const circleArea = calculateCircleArea();

console.log(`A=${circleArea.toFixed(4)}`);
