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
console.log(employees);

// Apartado 2 - Ordenar array por rendimiento e imprimirlo.

employees.sort(function (emp1, emp2){
    return emp1.rendimiento - emp2.rendimiento;
})
console.log(employees);

//Apartado 3 - Ordenar por salario

employees.sort((emp1, emp2) => emp1.salario - emp2.salario);

//Apartado 4 - Ordenar de forma decreciente por cargo

employees.sort(orderedDecrecient);

function orderedDecrecient(emp1, emp2) {
  /*   return emp2.slice(9) - emp1.slice(9); */
    return emp2.cargo.split(" ")[1] - emp1.cargo.split(" ")[1];
}

//Apartado 5 - Filtrar e imprimir ciertos campos

employees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario)); 

//Apartado 6 - Subir salarios con map

employees = employees.map(employee => {
    if (employee.salario < 1500) {
        employee.salario = employee.salario * 1,25;
    } 
        return employee;
});

//Apartado 7 - Calcular coste total para empresa

const totalCost = employees.reduce((salarySum, employee) => salarySum + employee.salario * 1.15, 0); 

console.log(`Coste total ${totalCost.toFixed(2)}`);

//Apartado 8 - 

console.table(employees.filter(employee => employee.rendimiento >= 0.3));

const avarageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salario, 0) / employees.length;
console.log(avarageSalary.toFixed(2));

/* employees = employees.map(employee => {
    if (employee.rendimiento > 0.7) {
        employee.salario = employee.salario * 1.25;
    }
    return employee;
}) */