const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const grades = [];

const weights = {
  weightA: 3.5,
  weightB: 7.5
}

function calculateWeights() {
  return weights.weightA + weights.weightB;
}

function calculateAverage() {
  const sumOfWeights = calculateWeights();

  for (let index = 0; index <= 2; index++) {
    grades[index] = parseFloat(samples.shift());
  }

  return ((grades[0] * weights.weightA) + (grades[1] * weights.weightB)) / sumOfWeights;
}

const average = calculateAverage();

console.log(`MEDIA = ${average.toFixed(5)}`);