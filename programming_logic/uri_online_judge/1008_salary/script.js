const input = require('fs').readFileSync('./dev/stdin', 'utf-8');
const samples = input.split('\n');

const values = [];

for (let index = 0; index <= 3; index++) {
  values[index] = parseFloat(samples.shift());
}

const employeesInfo = {
  employeesNumber: values[0],
  workedHours: values[1],
  valuePerWorkedHours: values[2]
}

function calculateSalary() {
  return employeesInfo.workedHours * employeesInfo.valuePerWorkedHours;
}

const salary = calculateSalary();

console.log(`NUMBER = ${employeesInfo.employeesNumber}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
