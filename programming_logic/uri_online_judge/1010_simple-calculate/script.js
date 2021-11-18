const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

function calculatePriceToPay() {
  const infoProduct1 = samples.shift().split(' ');

  const codeProduct1 = infoProduct1.shift();
  const unitsProduct1 = infoProduct1.shift();
  const priceProduct1 = infoProduct1.shift();

  const infoProduct2 = samples.shift().split(' ');

  const codeProduct2 = infoProduct2.shift();
  const unitsProduct2 = infoProduct2.shift();
  const priceProduct2 = infoProduct2.shift();

  return ((unitsProduct1 * priceProduct1) + (unitsProduct2 * priceProduct2));
}

const priceToPay = calculatePriceToPay();

console.log(`VALOR A PAGAR: R$ ${priceToPay.toFixed(2)}`);
