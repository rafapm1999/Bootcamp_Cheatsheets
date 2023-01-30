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



/* ----------------------Tipos de datos-------------------------- */

let str = String("I'm a string") /* Primera forma de crear un string */
let str2 = "I'm another string" /* Forma mas efectiva de crear un string */

console.log(typeof str, typeof str2, typeof ""); /* Nos dice que tipo de dato es el valor que le introducimos */
/*                  string      string      string */

let num = Number(5); /* Primera forma de crear un number */
let num2 = 5; /* Forma mas efectiva de crear un number */
console.log(typeof num, typeof num2, typeof 5, typeof 5.4, typeof "5");
/*              number      number      number      number      string */

