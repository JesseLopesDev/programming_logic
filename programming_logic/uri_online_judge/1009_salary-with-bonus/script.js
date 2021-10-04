const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const comission = 15 / 100;

const values = [];

for (let index = 0; index <= 3; index++) {
  values[index] = samples.shift();
}

const sellersInfo = {
  sellersName: values[0],
  fixedSalary: parseFloat(values[1]),
  totalMonthlySales: parseFloat(values[2])
}

function calculateSalary() {
  return ((sellersInfo.totalMonthlySales * comission) + sellersInfo.fixedSalary);
}

const salary = calculateSalary();

console.log(`TOTAL = R$ ${salary.toFixed(2)}`);
