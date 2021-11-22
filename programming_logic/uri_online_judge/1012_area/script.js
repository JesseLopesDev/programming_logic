const input = require('fs').readFileSync('./dev/stdin', 'utf-8');

const [valueA, valueB, valueC] = input.split(' ')
  .map(item => parseFloat(item));

const pi = 3.14159;

const rectangled = (valueA * valueC) / 2;
const circle = pi * Math.pow(valueC, 2);
const trapezium = ((valueA + valueB) * valueC) / 2;
const square = valueB * valueB;
const rectangle = valueA * valueB;

console.log(`TRIANGULO: ${rectangled.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rectangle.toFixed(3)}`);
