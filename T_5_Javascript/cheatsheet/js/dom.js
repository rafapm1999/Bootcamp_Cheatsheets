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

const grandParent = document.getElementsByClassName("grandparent");//IMPORTANTE, esta peticion necesito entre parentesis un string
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

children[0].parentNode.style.backgroundColor = "#333"; //Aqui estamos diciendo el padre (parentNode) de children[0]

const changeBackground= (element, color) => element.style.backgroundColor = color; //Crear funcion changeBackground con arrow function

function changeBackgroundv2 (element, color) { //Crear funcion changeBackground con funcion normal
    element.style.backgroundColor = color;
}

changeBackground(children[0], "#333");//el array children[0] le ponemos color #333
changeBackground(parent1, "red");
changeBackground(parent2.children[1], "blue") //ponemos blue el hijo[1] de parent 2
changeBackground(children[1].parentNode.parentNode,"#ddd"); //Le cambiamos el el bgc al padre del padre de children[1], es decir a grandparent


changeBackground(parent1.children[1].previousElementSibling, "red") //Aqui cambiamos color al "Hermano anterior" de children[1] (es decir children[0]), a color rojo

//Este tipo de accesos tan rebuscados no se usan nunca, es de modo explicativo
changeBackground(grandParent[0].children[1].previousElementSibling.lastElementChild, "green")

//Properties--------------------------------
/* grandParent[0].innerHTML = "<h1>HolaFuturo</h1>"; *///Modifica el HTML existente con esta etiqueta .innerHTML

/* children[0].innerHTML = "Child 1 V2"; */

console.log(children[0].innerHTML, children[0].textContent);
//.innerHTML tiene en cuenta todo el HTML al que hacemos referencia, etiquetas, texto, etc
//.textContent ignora las etiquetas y solo hace caso al texto 

console.log("classlist", parent1.classList);
parent1.classList.remove("bg-dark"); //Elimina la clase que pongamos entre parentesis
console.log("Classlist: ", parent1.classList);
parent1.classList.add("bg-red");//Añade una clase (la que digamos entre parentesis) al nodo seleccionado
console.log("Classlist: ", parent1.classList);
// parent1.classList.toggle("bg-red"); //Toggle alterna la clase, si no está, la incluye, si está la elimina
// parent1.addEventListener("click", (e) => e.target.classList.toggle("bg-red"));
parent1.id = "parentOne"; //Para añador id desde JS a HTML
parent1.setAttribute("name", "nombre-del-parent-1"); //Con .setAttribute, primero marcamos el atributo (name, class,etc) y luego por el nombre que pongamos

//Create / Remove Element-----

let myDiv = document.createElement("div"); //Entre los parentesis se introduce que etiqueta va a tener (div, footer, aside, header, tabla, etc)
//con document.createElement("div") creamos el nodo para "myDiv"
//Aún myDiv no existe en el dom

myDiv.id = "new-Div"; //Le creamos un id a myDiv
//Aún myDiv no existe en el dom

myDiv.classList.add("child"); //Le anexamos la clase child a myDiv
//Aún myDiv no existe en el dom

myDiv.textContent = "child 2.5";//Le añadimos texto a myDiv
//Aún myDiv no existe en el dom

parent1.appendChild(myDiv); //Decimos que myDiv, sea hijo de parent1, aquí ya introducimos a myDiv en el dom
//Un nodo es unico, con lo cual si pusiesemos:
//parent2.appendChild(myDiv); lo que hará es sobreescribir el existente y pasarlo al otro lado

let myDiv2 = myDiv;//creamos una variable donde guardamos el valor de myDiv
parent2.appendChild(myDiv2); //Se podría decir que esta es la forma de que en nodo myDiv se duplique, ya que al ser unico no se podría hacer sin este sistema

myDiv2 = myDiv.cloneNode(); //Creamos un nodo a partir del original, entre parentesis si ponemos true, hace un copia entera del nodo, con sus hijos, texto, etc, si ponemos false, solo hace una copia del elemento e ignora todo lo que tenga en su interior
//No poner nada en los parentesis es igual que poner false

myDiv2 = myDiv.cloneNode(true);
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5"
//myDiv.remove(); //Elimina totalmente el elemento

let myDiv3 = myDiv.cloneNode();
parent2.before(myDiv3); //Te inserta lo que pongamos entre parentesis antes del elemento que digamos al principio, en este caso, myDiv3 va a estar ubicado antes de parent2 

parent2.after(myDiv.cloneNode());//En este caso el cloneNode realizado de myDiv iria ubicado al final de parent2
//al no tener true la copia que realiza cloneNode es superficial, y solo copia el elemento, pero sin info ni contenido

//Ejercicio: Crea una función que me devuelva un nodo nuevo y que reciba etiqueta ID

function createNode (label, id) {
    let newNode = document.createElement(label); 
    label.id = id;
    return newNode;
}

let newDiv1 = createNode("div", "id1");
let table1 = createNode("table", "id2");

let link = createNode("a", "mainLink");
link.textContent = "Texto del Enlace";//Le insertamos texto 
link.setAttribute("href", "https://google.com")//Le ponemos un href a Google.com
// grandParent.appendChild(link);//Damos un espacio a link dentro del dom

//--------------------Eventos / Events------------------

const colorButton = document.getElementsByTagName("button")[0];//Al poner [0], ya me devuelve un elemento y puedo realizarle cosas, si no lo pongo, me devuelve un HTMLCollection, que es como un array
console.log(colorButton);
colorButton.addEventListener("click", function (event) { //.addEventListener espera entre parenteris, 1º el nombre del evento, y 2º una función que realice cosas
    console.log(event);
    console.log(event.target);
    // document.body.style.backgroundColor = "green"; //Decimos una vez hecho click el body del documento pase a una bgc green
    // document.body.classList.toggle("bg-red"); //Aqui con toggle, si tiene bg-red lo quita cuando demos al boton y si volvemos a darle y no tiene bg-red lo pone
    // console.log(event.target.tagName);//Aqui me haría un log con el nombre de la etiqueta, en este caso BUTTON
    if (event.ctrlKey) {
        document.body.classList.toggle("bg-red");
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`);//Este log nos da las cordenadas del ratón dentro del navegador en el momento exacto que ejecuta el evento
    console.log(`Alt ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});


const emailInput = document.querySelector("#emailInput");
emailInput.addEventListener("focus", inputListener);//Cuando pinchamos sobre el input te activa el evento focus
emailInput.addEventListener("blur", inputListener);//Cuando despinchamos el input se activa el evento blur 

const container = document.getElementById("container");
container.addEventListener("mouseover", inputListener); //Aqui raton esta encima del div, activa inputLisener
container.addEventListener("mouseout", inputListener);//Si es raton deja de estan encima del div activa inputLisener
 
function inputListener (e) {
    console.log("Tipo de evento: ", e.type);
    if (e.target.tagName === "DIV") {
        console.log("Tipo de evento: ", e.type);
    } else if (e.type === "focus") {
        e.target.classList.add("bg-red");
    } else if (e.type === "blur") {
        e.target.classList.remove("bg-red");
    }
}   

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; //Le cambiamos el texto al h1[2], con los datos que reciba emailInput
}
emailInput.addEventListener("keydown", inputListener);//Con este evento cuando una tecla este pulsada hara la funcion inputListener
emailInput.addEventListener("keyup", changeTitle);//Cuando la tecla deje de estar pulsada hará la función changeTitle

function coords (e) {
    document.querySelectorAll("h1")[3].textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);



/* Array.from(family).forEach(item => console.log(item));  *///Construyo una array desde HTMLCollection

/* for (let familyMember of family) {
    console.log(familyMember);
} */






