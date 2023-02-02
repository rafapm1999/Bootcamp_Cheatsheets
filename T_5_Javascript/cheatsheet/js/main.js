/* ------------------Uso de JS Externo-------------------------*/
function saludo () {
    alert ("Hola desde un script externo") /* Creamos la función saludo, con la cual generamos un alert con un texto */
    console.log("Has hecho click en el enlace 2")
}
//document.getElementsByTagName("a").item(2).addEventListener("click", saludo);






/* ----------------------Depuracion / logging-------------------------- */
//alert("mensaje")
console.log("mensaje");






/* ----------------------Variables-------------------------- */
// var -> function scope (mas global)
// let / const -> block scope (mas focalizada en bloques)






/* Creando variable con let */
function saludar() {
    /* let contador; */ /* Con esto al inicio de la función ya no daría error los dos console.log, ya que la variable esta definida aunque no tenga valor (está inicializado dentro de la función saludar, cuando esta acabe esa variable contador muere) */
    /* console.log("Inicial: ", contador); */ /* Nos genera un error en la consola porque estamos llamando a una variable sin haberla inicializado previamente */
    for (let contador = 0; contador < 10; contador++){
    /* Para (variableContador = 0; hasta contador<10; hacer contador +1) */
    
        console.log(contador);
    }
    /* console.log("Final: ", contador); */ /* Nos genera un error en la consola porque una vez acabada la función for, contador muere y ya no existe, ya que fué creado con let que es de tipo bloque */

}

saludar();








/* Creando variable con var (NO ES RECOMENDABLE USARLO)*/

/* function saludar() {

    ////var contador;////// Es como si hiciese esto cuando lee esto; for (var contador = 0; contador < 10; contador++){

    console.log("Inicial: ", contador); 
    for (var contador = 0; contador < 10; contador++){
   
    
        console.log(contador);
    }
    console.log("Final: ", contador); 

} */

/* No nos genera error ya que el ser una variable con var, la variable se inicializa al inicio automaticamente */




console.clear();/* Hace que la consola se limpie (como el limpiar de PSEINT) */







/* ----------------------Variables. 1. Inicialización---------------- */
/* Consejo; definir variables con const a no ser que su valor inicial vaya a ser modificado (contadores, etc) */

//Variables con let

/* Defino y luego doy valor */
let day;
day = 5;

/* Defino y doy valor al mismo tiempo */
let monthName = "Octubre";

/* Defino variables variables */
let hour, minute, second;

/* Inicialización de Arrays */

/* Creamos el array y damos el valor de cada uno por su posición */
let array = [15, 20, 25]; /* Con esta forma creamos el array como nombre, y cada posición del array tiene el valor introducido. */
console.log(array[0], array[1], array[2]);

/* Creamos varios arrays diferentes, los cuales tendrán cada uno el valor de la posición que le toque en lo introducido en la lista */
let [var1, var2, var3] = [15, 20,25]; /* var1 = 15, var2 = 20, var3 = 30 */
console.log(var1, var2, var3);


//Variables con const

/* -----Definir la variables const y darle su valor / inicializarla (el cual ya no puede ser modificado) */
const x = 1;
/* x = 2; */ /* Genera un error!!! ya que x siempre tendra el valor de 1 (invalid assigment to const 'x') */


/* -----Definir la variable const sin darle valor /iniciarla */
/* const y;  */ /* Genera un error!!! (missing = in const) */



console.clear();



/* ---------------------- Tipos de datos------------------------- */

/* Datos Primitivos--------------- */

//Strings
let str = String("I'm a string") /* Primera forma de crear un string */
let str2 = "I'm another string" /* Forma mas efectiva de crear un string */

console.log(typeof str, typeof str2, typeof ""); /* Nos dice que tipo de dato es el valor que le introducimos */
/*                  string      string      string */

//Numericos
let num = Number(5); /* Primera forma de crear un number */
let num2 = 5; /* Forma mas efectiva de crear un number */
console.log(typeof num, typeof num2, typeof 5, typeof 5.4, typeof "5");
/*              number      number      number      number      string */

//Booleans
let bool = Boolean(true);
let bool2 = false;

console.log(typeof bool, typeof bool2, typeof true, typeof "true");
/*              Boolean         Boolean        Boolean      String */
//Undefined

let undef; /* Variable definida pero no inicializada (Sin valor) */

console.log( undef, typeof undef);
/*              undefined       undefined */

//Null
let selectedColor = null; /* Sirve para limpiar una variable */
console.log(selectedColor, typeof selectedColor);
/*                  null                object */


/* Objectos------------------------- */

//Arrays
let array1 = Array(1, 2, 3);
let array2 = [1, 2, 3];

console.log(array1, array2);
console.log(typeof array1, typeof array2);

/* console.log(typeof new Date("31-01-2023"));
                        Object
console.log(typeof new Error("Mensaje de Error")); 
                        Object*/




/* --------------------Strings------------------------------- */
str = "Hola futuro";
console.log(str, str.length) //Al ser un string, tiene la propiedad .length para saber la longitud del string. (Los strings son Objetos)

/* Para saber que propiedades tiene cada tipo de dato podemos poner;
    Number., String., Boolean.,etc */

console.log(str.indexOf("futuro"), str.indexOf("Valor que no existe"));
/*                          5                       -1 */
/* Si sale en la consola al poner esto un -1, nos está diciendo que no encuentra el dato que le hemos puesto */

console.log(str.lastIndexOf("u"));
console.log("La última ocurrencia de 'u' está en el índice, ", str.lastIndexOf("u"));
/* Con lastIndexOf me dice en que posición está la ultima ocurrencia que le introducimos, nos dice 8, cuando la primera coincidencia es en 6 */

console.log(str.substring(1, 3));
/*                      ol       */ /* Aqui le estoy diciendo que me devuelva los datos con la posición 1 hasta 3 (-1, con lo cual hace referencia realmente al valor 2) */
console.log(str.substring(0));
/*                      Hola Futuro      */ /* Aqui dice que empiece a darme los datos desde el punto 0 en adelante  */

console.log("Hola mundo" .concat(". Adiós mundo.")); /* Concat lo que hace es unir  */
console.log("Hola mundo" + ". Adiós mundo");/* Hace la misma funcion de concat */

str = str + ". Adiós Mundo"; 
str += ". Adiós Mundo" /* Ambas formas hacen la misma función */ /* La que se usa es esta por ser mas corta y efectiva */
console.log(str);
/*             . Adiós Mundo. */

console.log(str.replace("Mundo", "Futuro")); /* Solo cambia la primera ocurrencia que encuentra */
console.log(str.replaceAll("Mundo", "Futuro")); /* Cambia todas las ocurrencias que encuentra */

console.log(str.toLowerCase()); /* Cambia los valores del string a minusculas */
console.log(str.toUpperCase()); /* Cambia los valores de string a mayusculas */

console.log(`El día de mi cumpleaños es el día ${day}`); /* Las comillas ` ` me permiten hacer strings y concatenarlo con valores/datos de variables de una forma simple, hay que poner las variables entre: ${ variable }. Esta forma es reconocida a partir de ES6 */
console.log("El dia de mi cumpleaños es el dia", day); /* Hace lo mismo que el de arriba pero es menos efectivo */


// Parsing (Parseo)------------

let number = Number("1000"); /* Si puesiese  ("1000rafa") me marcaría NaN (Not A Number), ya que rafa no sería un numero y con Number("") estoy diciendo que va a ser un valor Number si o si"*/
console.log(number, typeof number);
/*              1000           Number */

number = Number("1000rafa"); 
console.log(number, typeof number);
/*              NaN         Number */

number += "12000"; /* Al hacer esto entiende que estamos haciendo una concatenación, no que queramos hacer una suma */
/* Es como si pusiesemos NaN += "12000"; Ya que el ultimo valor de la variable number es NaN porque le dimos el valor ("1000rafa") */
/* Y el += es la forma abreviada de concatenar, con lo cual concatena ambos valores y por consiguiente cambia el tipo de number a string */
console.log(number, typeof number);
/*              NaN12000    String */ /* Al poner un valor sin la etiqueta de tipo de dato y entre comillas entiende que lo que hemos introducido es un string con valor 12000 */



/* --------------------Objetos / Objects------------------------------- */

//Todo lo que esté en JS entre "{ }" es un objeto
let person = {
    //key:value
    name: "John",
    age: 30,
    blonde: false, /* El ultimo valor hay que dejarlo sin coma */
    
}

//Acceso por puntos / Dot notation

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

console.log(typeof person);

//Acceso por corchetes / Brackets notation

let nombreDeLaVariableQueQuiero = "age";
console.log(person[nombreDeLaVariableQueQuiero]);

//Ampliación

person = {
    
    name: "John",
    age: 30,
    blonde: false,
    /* childern: ["Peter, Lucas"] */ /* Se podría ampliar la información que contiene el objeto de esta forma, pero no es la más recomendable ya que se repetería lineas de codigo y es menos efectivo */
    jump() {
        console.log("Hey, estoy saltando");
    }, /* Así se puede hacer desde ES6 */
    walk: function() {
        console.log("Hey, estoy andando");
    }  /*  Así se hacía antes de ES6 */ // Esta opción puede usarse en React
}


person.children = ["Peter", "Lucas"]; /* Esta es la mejor forma de añadir nuevo contenido dentro del objeto; que objeto (person), nueva key (array, children), y el valor de este (["Peter", "Lucas"]) */

console.log(person);
console.log(person.children[1]); /* Para que escriba el valor del array 2, que está dentro del array children, que está dentro del objeto person */

/* Para llamar a la función jump(){} y a la función walk: function(){}*/

person.walk();
person.jump();

console.log(typeof {}, typeof [], typeof "", typeof person.children[10]);

//This------------------

const person2 = {
    name: " Thomas ",
    talk() {
        console.log(`me llamo ${this.name}`); /* this hace referencia al elemento raiz donde se encuentra la orden this */
        /* This hace referencia a person2, seria lomismo que poner ${person2.name} */
    }
}

person2.talk();

console.log(this);



/* --------------------Arrays------------------------------- */

//Creamos el array
let selectedColors =["red", "blue"]; /* Array de Strings */
console.log(selectedColors, selectedColors.lenght, typeof selectedColors);

//Creamos un elemento nuevo en el array indicando su posición
selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);



//Creamos un elemento nuevo en el array sin indicar posicion ninguna
selectedColors.push("violet", "white"); /* Con esto decimos que añada otro elemento al array, sin que haga falta indicarle la posición de este, ya automaticamente lo hace añadiendolos al final de la lista del array*/
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("black"); /* Con unshift lo que hacemos es añadir los elementos indicados entre parentesis al principio del array */
console.log(selectedColors, selectedColors.length);



//Eliminamos un elemento del array
selectedColors.pop(); /* el metodo pop() hace que se elimine el ultimo elemento del array */
console.log(selectedColors, selectedColors.length);

selectedColors.shift(); /* Elimina el primer elemento del array */
console.log(selectedColors, selectedColors.length);

console.log(selectedColors.indexOf("red")); /* Le estamos diciendo que imprima en pantalla en que posicion está red dentro del array selectedColors*/

console.log(selectedColors[selectedColors.indexOf("red") + 1]); /* Lo mismo que arriba pero diciendole que el que queremos es la posición siguiente a la de red y que nos imprima el valor */

console.log(selectedColors.slice(1, 3)); /* Slice me devuelve aquellos valores que esten compredidos entre el rango que le he indicado entre parentesis, coge del 1 al 2 realmente */

console.log(selectedColors.splice(1, 3)); /* Borra los elementos desde el valor de inicio (1, X), y la cantidad de numeros en adelante que vamos a borrar (X, 3), y "devuelve" los valores borrados. si no pusiesemos el 3 borraria desde el valor con posicion 1 hasta el final del array  */
/* SI quisiesemos borrar unumero especifico habria que decirle que posicion tiene (1, X), y hasta donde, (1, 1). Así solo borramos un elemento en concreto  */
console.log("El array tras hacer splice se queda asi : ", selectedColors);

console.clear();

//-----------------------------------------------------------------------------------------------------------------------
//Ejercicio: Crear objeto niño con propiedades nombre, altura, género y amigoS. Amigos estará onicialmente vacío y añadiremos posteriormente 3 elementos con los nombre. Después, añadiremos uno extra al inicio.

const niño = { /* Esto es programar con el metodo de Programación orientada a objetos */
    nombre : "Rafa" ,
    altura : 1.60,
    genero : "Masculino",
    amigoS: [],
    perderAmigo () {
        this.amigoS.pop();
    }
}

console.log(niño); //Hasta aqui todo perfecto

niño.amigoS = ["Pablo", "Miguel", "Javi"];

console.log(niño); //Hasta aqui todo perfecto

niño.amigoS.unshift("Pepe"); /* Si pusiesemos a Pepe entre [] en vez de crear un elemento mas dentro del array, crearía un array Pepe vacío */
console.log(niño); //Hasta aqui todo perfecto

/* Ponemos en el terminal  node cheatsheet/js/main.js para ejecutar el main.js directamente en el terminal o descargamos la extensión Code runner y damos al boton play de la derecha para ejecutarlo*/

//Borramos el ultimo amigo
console.log(niño);
niño.perderAmigo(); //Llamamos a la función perder amigo
console.log(niño);

//-----------------------------------------------------------------------------------------------------------------------

/* ----------------------------------------------Condicionales------------------------------------------- */
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Hey tienes que introducir el mismo tipo");
}


if (randomNumber === guessedNumber) {
    console.log("Has acertado");
} else if (randomNumber > guessedNumber) {
    console.log("El numero secreto es mayor");
} else if (randomNumber < guessedNumber) {
    console.log("El numero secreto es menor");
} else{

}







