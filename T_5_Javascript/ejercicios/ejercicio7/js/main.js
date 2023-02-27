//Guardamos en una variable la url de la API a la que vamos a hacerle la peticion
const url = "https://jsonplaceholder.typicode.com/comments";
//Seleccionamos el elemento ul del HTML
const ulList = document.querySelector("#ulList");

//Creamos dos variables con arrays vacios, uno para guardar la respuesta completa de nuestra peticion a la API con los 500 comments,
// y la otra, la que se mostrará en pantalla
let dataArray = [];
let displayArray = [];

//Creamos una función para crear los elementos li 
function fillList (array) {
    array.forEach(object => { //Para cada "object" de nuestro array
       ulList.innerHTML += 
       `<li>${object.name}</li>`; //Creamos un elemento HTML con innerHTML el cual es un li con un valor de .name
    });
};

//Hacemos una peticion a la API
async function requestToTheAPI (url) {
    const r = await fetch(url); //Pedimos y esperamos con await a la respuesta
    const data = await r.json(); //Con la respuesta hacemos un petición para que lo convierta en .json y con await esperamos a la nueva respuesta
    dataArray = [...data];//Hacemos una copia del archivo recibido .json dentro de la variable dataArray (Los 500 comments)
    displayArray = [...dataArray.slice(0, 20)]; //Hacemos una copia de los 20 primeros elementos dentro del array dataArray en displayArray
    fillList(displayArray); //Llamamos a la funcion fillList introduciendo el array de 20 elementos, displayArray
};

requestToTheAPI(url); //Llamamos a la funcion que hará la peticion a la API introduciendo la url de la API

