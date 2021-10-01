const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const values = [];

function calculateDifference() {
  for (let index = 0; index <= 4; index++) {
    values[index] = parseInt(samples.shift());
  }

  return ((values[0] * values[1]) - (values[2] * values[3]));
}

const difference = calculateDifference();

console.log(`DIFERENCA = ${difference}`);
