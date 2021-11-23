const input = require('fs').readFileSync('./dev/stdin', 'utf-8');

const [valueA, valueB, valueC] = input.split(' ')
  .map(item => parseInt(item));

function calculatesLargestAmongAB() {
  return (valueA + valueB + Math.abs(valueA - valueB)) / 2;
}

function calculatesLargestAmongXC() {
  const largestAmongAB = calculatesLargestAmongAB();

  return (largestAmongAB + valueC + Math.abs(largestAmongAB - valueC)) / 2;
}

const largestAmongXC = calculatesLargestAmongXC();

console.log(`${largestAmongXC} eh o maior`);
