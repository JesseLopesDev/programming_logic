const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const [xAxis1, yAxis1] = samples[0].split(' ');
const [xAxis2, yAxis2] = samples[1].split(' ');

function calculateDistanceBetweenPlanes() {
  return Math.sqrt(Math.pow(xAxis2 - xAxis1, 2) + Math.pow(yAxis2 - yAxis1, 2));
}

const distanceBetweenPlanes = calculateDistanceBetweenPlanes();

console.log(distanceBetweenPlanes.toFixed(4));
