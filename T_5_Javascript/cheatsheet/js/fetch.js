const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url); //fetch nos devuelve una promesa, necesita que dentro de los parentesis haya una url de donde extraera la info .json

// fetch(url).then(response => console.log(response)); //Con .then lo que haya dentro de sus parentesis solo se ejecutará cuando la promesa se haya resuelto 

// fetch(url).then(response => response.json()); //.json() convierte lo que devuelve .then() en un archivo .json, pero este a su vez vuelve a ser una promesa

//La linea final con lo cual sería

fetch(url).then(response => response.json()).then(data => console.log(data));

//Ejemplo:

function printNames (array) {
    array.forEach(array => console.log(array.name))
};

fetch(url)
    .then(response => {
        if(!response.ok) { //Si response.ok no ha sido OK entra en throw
            throw Error("Hay algún problema con la respuesta: " + response.statusText); //Throw lanza un error 
        }
        return response.json(); 
    })
    .then(data => printNames(data))
    .catch(error => {
        console.log(error);
    });

// Async - await (Alternativa a .then())

async function requestUrl (url) { //De esta forma delante de la función estamos obligados a poner async, eso informa a la funcion de que unicamente bloquee las lineas que contengan await hasta que tengan las respuesta
    const response = await fetch(url); //await hace que se bloquee la peticion/programa hasta que consiga la respuesta, una vez conseguida vuelve a inicializar la linea con respuesta
    const data = await response.json();
    console.log(data);
}


//Peticion con método HTTP POST en lugar de GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";; //En programación las constantes que sabemos que si o si van a ser constantes y no van a variar nunca se ponen en MAYUSCULAS

const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publicación"
}

const http = { //Tenemos un objeto http 
    method: "POST", //Con la propiedad method cambiamos el metodo de la petición, en este caso pasará a enviar info en vez de pedirla
    headers: { //Con esta propiedad headers podemos modificar cualquier tipo de cabecera de las peticiones
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost) //Aqui especificamos el cuerpo del objeto que vamos a enviar
    //Tenemos que convertir a JSON ese element, con lo cual usamos JSON.stringify() para hacer que el objeto sea .json
}
fetch(POST_URL, http) //EN fetch introducimos la url, y el objeto http con metodo post, con lo cual fetch enviará info
    .then(r => r.json())
    .then(data => console.log(data))