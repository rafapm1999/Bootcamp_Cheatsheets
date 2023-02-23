// Antes de ES6

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}
 console.log(new Date());

 let myCar = new Car("Ford", "Mustang", 1990);
 let myCar2 = new Car("Audi", "Q7", 2015);

 console.log(myCar);
 myCar.getAge();


 //-----Si queremos añadir algo nuevo en la instancia

 //Forma incorrecta (NO actualiza la instancia)

 Car.getHP = function () {
    console.log("This car has 300 horsepower");
 }

 //Forma correcta, pero que unicamente actualiza la instancia mencionada

 myCar.getHP = function () {
    console.log("This car has 400 horsepower");
 }

 //Actualiza todas las instancias de forma correcta

 Car.prototype.getHP = function () {
    console.log("This car has 300 horsepower");
 }

 myCar.getHP();
 myCar2.getHP();

 console.log(myCar);