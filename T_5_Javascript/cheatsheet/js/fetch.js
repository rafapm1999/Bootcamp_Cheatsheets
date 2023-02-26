const URL = "https://jsonplaceholder.typicode.com/users";

// fetch(URL); //fetch nos devuelve una promesa, necesita que dentro de los parentesis haya una url de donde extraera la info .json

// fetch(URL).then(response => console.log(response)); //Con .then lo que haya dentro de sus parentesis solo se ejecutará cuando la promesa se haya resuelto 

// fetch(URL).then(response => response.json()); //.json() convierte lo que devuelve .then() en un archivo .json, pero este a su vez vuelve a ser una promesa

//La linea final con lo cual sería

fetch(URL).then(response => response.json()).then(data => console.log(data));

//Ejemplo:

function printNames (array) {
    array.forEach(array => console.log(array.name))
};

fetch(URL)
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

