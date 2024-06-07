const employees = 15;
let totalSalary = 0;
const minSalary = 100;
const maxSalary = 500;

for (let i = 0; i <= employees; i += 1) {
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
console.log('Зарплата ' + $(i) + '-го рибака: ' + salary)

    totalSalary += salary;
}
console.log(totalSalary)