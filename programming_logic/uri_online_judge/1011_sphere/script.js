const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const sample = input.split('\n');

const radius = parseInt(sample.shift());

const pi = 3.14159;

function calculateVolume() {
  return (4 / 3) * pi * Math.pow(radius, 3);
}

const sphereVolume = calculateVolume();

console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);
