/* ------------------Uso de JS Externo-------------------------*/
function saludo () {
    alert ("Hola desde un script externo") /* Creamos la función saludo, con la cual generamos un alert con un texto */
    console.log("Has hecho click en el enlace 2")
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);






/* ----------------------Depuracion / logging-------------------------- */
alert("mensaje")
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









