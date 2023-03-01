//Constantes

const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users/";

//Selector 
const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
document.querySelector("#loginButton").addEventListener("click", login);
const usersList = document.querySelector("#usersList");


function login(event) {
    event.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };

    const config = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userInfo)
    };

    fetch(LOGIN_URL, config)
        .then(response => response.json())
        .then(data => //data.error ? alert(data.error) : fetchAllUsers());
            {
        if(data.error) {
            alert(data.error)
        } else {
            fetchAllUsers();
        }
    })
}

/* function fetchAllUsers () {
    fetch(USERS_URL)
        .then(response => response.json())
        .then(data => console.log(data));
} */


//Codigo importante. Se va a usar mucho en el futuro. 
async function fetchAllUsers () {  //Hacemos una peticion asincrona
    let response = await fetch(USERS_URL); //Hacemos fetch de la url con await para bloquear el programa hasta que recibamos la respuesta
    let data = await response.json(); //Guardamos el data la respuesta de .json()
    
    let users = []; //Creamos nuestro array de usuarios vacio para guardar en el los datos del fetch a la API


    //Con el fetch anterior obtenemos el numero de paginas del objeto/array de la API
    //Creamos un for para que haga fetch para cada pagina, hasta su ultima pagina, y guardamos/concatenamos la informacion (apartado .data) del fetch en nuestro array users
    for (let page = 1; page <= data.total_pages; page++) { 
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);
        //users = [...users, ...newData.data]; Es lo mismo que arriba
    }
    //Para cada user del array users, hacemos que se añada en el HTML, usando el .innerHTML, un elemento <li></li> con el email de los usuarios
    usersList.innerHTML="";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
}


//Alternativa para recuperar todas las páginas de una API utilizando .then()
//con una función recursiva

let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
        .then(response => response.json())
        .then(newData => {
            users = users.concat(newData.data);

            if(newData.page < newData.total_pages) {
                fetchAllUsersV2(`${USERS_URL}?page=${newData.page + 1}`)
            } else {
                users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
            }
        });
}