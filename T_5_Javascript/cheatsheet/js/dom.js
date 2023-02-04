//Cuidado al trabajar con varios archivos JS ya que estan "intercomunicados entre si"
//y puede que variables que nombremos en los nuevos archivos ya estén inicializadas en 
//el archivo anterior, con lo que entreran en conflicto

/* -----------------------DOM (Document Object Model)------------------ */

//Basics--------------------------
console.log(document) //Hace log del elemento document

console.log(document.domain); //Nos muestra el dominio de nuestro archivo html

console.log(document.URL); //Nos muestra la URL completa de la web

console.log(document.title); // Muestra el titulo de la web

document.title += " (DOM)"; //Concatenamos (DOM) al titulo

console.log(document.title);

//Selectores / Selectors----------------------

const family = document.getElementsByTagName("div");
console.log(family);
//Creamos una cosntante que sea family y metemos en ella 
//la peticion document.getElementsByTagName("div") 

const grandParent = document.getElementById("grandparent");//IMPORTANTE, esta peticion necesito entre parentesis un string
console.log(grandParent);

const parents = document.getElementsByClassName("parent"); //Guardamos en la costante parents toda la info HTMLCOLLECTION de la clase parent
console.log(parents);
const parent1 = parents[0]; // Creamos una constante parent1, y le guardamos el elemento 0 del "semiarray" (HTMLCollection) parents
const parent2 = document.getElementsByClassName("parent")[1]; // Creamos una constante parent2, la peticion del elemento 1 de parents
//Ambas formas hacen lo mismo
console.log(parent1);
console.log(parent2);

const children = document.getElementsByClassName("child"); //Realizamos una petición que nos devuelva todos los elementos child y lo metemos dentro de una constante llamada children
console.log(children);//De todos los hijos
console.log(children[1]);

let element = document.querySelector("div#grandparent>.parent>div.child#child4");
//let element = document.querySelector(#child4");
//Ambos serian lo mismo, ya que el id es único

let element2 = document.querySelectorAll(".grandparent div"); //Este es mejor cuando queremos seleccionar varios elementos a la vez
console.log(element2);

//Ejemplos Practicos

parent1.style.backgroundColor = "#ddd"; //Cambiamos el css desde JS del fondo de parent1
















/* Array.from(family).forEach(item => console.log(item));  *///Construyo una array desde HTMLCollection

/* for (let familyMember of family) {
    console.log(familyMember);
} */






