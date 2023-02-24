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

 function SUV(brand, model, year, width, height) {
   Car.call(this, brand, model, year); //Con esto hacemos que SUV herede las cosas que tenian Car
   this.width = width;
   this.height = height;

 }

 let mySUV = new SUV ("Audi", "Q3", 2017, 2200, 2000);

 mySUV.getAge(); //Funciona bien
/* mySUV.getHP(); *///No encuentra la función ya que .getHP fué actualizada usando el prototype

//----------------------ES6--------------------------

class Book {
   constructor(title, author, year) { //Con la palabra constructor, creamos el constuctor
      this.title = title;
      this.author = author;
      this.year = year;
   } //A partir de aqui para abajo la class espera funciones
   getSumary () {
console.log(`${this.title} was written by ${this.author} in ${this.year}`);
   }
   getType () {
      console.log("Im not a normal book");
   }
}

const book1 = new Book("Meta", "Frank", 1915); //Creamos una nueva instancia a partir del constuctor Book
console.log(book1);

//SubClasses (Herencia)

class Magazine extends Book{
   constructor(title, author, year, month){
      super(title, author, year);
      this.month = month;

   }
   getType() {
      super.getType(); //Con esto hace referencia al getType de Book, ya que super hace referencia a su superior (de quien hereda), en este caso Book
      console.log("Im a magazine");
   }
}

// Instanciamos una revista
const mag1 = new Magazine("Super",  "Algún", 2015)

mag1.getSumary();

mag1.getType();
book1.getType();

//Otro ejemplo de poliformismo

class Animal {
   constructor( type, name, sound ) {
   this.type = type;
   this.name = name;
   this.sound = sound;
   }
   makeSound() {
      console.log(`This ${this.type} named ${this.name} goes ${this.sound}`);
   }

   static compareAnimals(animal1, animal2) { //Esta funcion es estatica
      return animal1.type === animal2.type;
   }
}

class Cat extends Animal {
   constructor(name){
      super("cat", name, "meow");
   }
}

class Dog extends Animal {
   constructor(name){
      super("dog", name, "woof");
   }
}

const conBotas = new Cat("Con Botas");
const jako = new Dog ("Jako");

conBotas.makeSound();
jako.makeSound();

console.log(Animal.compareAnimals(jako, conBotas));