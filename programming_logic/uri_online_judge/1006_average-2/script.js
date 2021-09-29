const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const grades = [];

const weights = {
  weightA: 2.0,
  weightB: 3.0,
  weightC: 5.0
}

function calculateWeights() {
  return weights.weightA + weights.weightB + weights.weightC;
}

function calculateAverage() {
  const sumOfWeights = calculateWeights();

  for (let index = 0; index <= 3; index++) {
    grades[index] = parseFloat(samples.shift());
  }

  return ((grades[0] * weights.weightA) + (grades[1] * weights.weightB) + (grades[2] * weights.weightC)) / sumOfWeights;
}

const average = calculateAverage();

console.log(`MEDIA = ${average.toFixed(1)}`);
