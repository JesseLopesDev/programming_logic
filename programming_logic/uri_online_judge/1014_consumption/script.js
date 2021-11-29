const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const values = [];

function calculateAverageConsumption() {
  for (let index = 0; index <= 2; index++) {
    values[index] = parseFloat(samples.shift());
  }

  const info = {
    totalDistanceTraveled: values[0],
    spentFuelTotal: values[1]
  }

  return info.totalDistanceTraveled / info.spentFuelTotal;
}

const averageConsumption = calculateAverageConsumption();

console.log(`${averageConsumption.toFixed(3)} km/l`);
