function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

//Apartado 1 - Generar el Array
let employees = [];
for (let i = 1; i<= 100; i++) {
    const newEmployee = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomBetweenRange(1250, 4000)
    };
    employees.push(newEmployee);
}
console.log(employees);

//Apartado 1 -V2
function Employee(cargo, rendimiento, salario) {
    this.cargo = cargo;
    this.rendimiento = rendimiento;
    this.salario = salario;
}

employees= [];
for (let i = 0; i <=100; i++) {
    employees.push(new Employee(`Empleado ${i}`, Number(Math.random().toFixed(2)), randomBetweenRange(1250, 4000)));
}
console.log();