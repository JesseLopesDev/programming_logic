const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const values = [];

function calculateProduct() {
  for (let index = 0; index <= 2; index++) {
    values[index] = parseInt(samples.shift());
  }

  return values[0] * values[1];
}

const product = calculateProduct();

console.log(`PROD = ${product}`);
