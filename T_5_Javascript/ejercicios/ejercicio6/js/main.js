//Constructor para Books
function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
}

//Data initialization

let books = [ 
    new Book(1, "Hola amigo", "Mike Ar", 123445, 12),
    new Book(2, "Adios amigo", "Mike Ar", 445, 13),
    new Book(3, "Amigo", "Mike Wolf", 45, 29),
    new Book(4, "Pepe el León", "Valentina", 11223445, 5),
    new Book(5, "Simba", "Carlos Marls", 2006805, 20),
];

let displayBooks = [...books]; //Hacemos una copia del array books en displayBooks
//let displayBooks = Array.from(books);

//Selectors

//Seleccionamos los elementos del HTML
const booksTbody = document.getElementById("booksBody");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");
const tfoot = document.querySelector("tfoot");

//Creamos la funcion updateTable con la que actualizamos la tabla
function updateTable() {
    booksTbody.innerHTML = ""; //Vaciamos el tbody al completo
    
    
    books.forEach(book => { //Generamos cada fila una a una, de la forma más sencilla
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td><button class="btn btn-danger" id="${book.id}">Remove</td>
        </tr>`;
    });
   
    //Hacemos que el totalPrice se actualice conforme a los elementos mostrados en la tabla
    const totalPrice = displayBooks.reduce((priceSum, book) => priceSum + book.price, 0);
    tfoot.textContent = `Precio total ${totalPrice}`;
} 

//Con este boton eliminamos el contenido de la tabla que seleccionemos
booksTbody.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON")
    books = books.filter(book => book.id != e.target.id); //AL no poner solo un igual hacemos qu elña comparacio no sea estricta con lo cual no debemos parsear a Number el e.taget.id(es un numero pero string)
    displayBooks = displayBooks.filter(book => book.id != e.target.id)
    updateTable();
    }
); 


//Hacemos que la tabla aparezca rellena al llamar a la funcion
updateTable(); //Llamamos a la function 

//Con esta funcion hacemos que pueda añadirse nuevos libros en neustra lista
 addBookButton.addEventListener("click", e => {
    e.preventDefault(); //CON ESTO HACEMOS QUE EL COMPORTAMIENTO POR DEFECTO QUE GENERA LOS BOTONES DE TIPO SUBMIT DESAPAREZCA (evita que recargue la pagina)
    const newId = displayBooks[displayBooks.length - 1].id + 1;
    const newBook = new Book( newId, titleInput.value, authorInput.value, salesInput.value, Number(priceInput.value));
    books.push(newBook);
    displayBooks.push(newBook);
    updateTable(); 

  titleInput.value = "";

authorInput.value = "";

salesInput.value = "";

priceInput.value = ""; 

addBookButton.parentNode.reset();
 }); 

//
let filterInput = document.querySelector("#filterInput");
const priceHeader = document.querySelector("#priceHeader")

let ascendingOrder = true;


filterInput.addEventListener("input", e => {
    displayBooks = books.filter(book => book.title.toUpperCase().includes(e.target.value.toUpperCase()) || book.author.toUpperCase().includes(e.target.value.toUpperCase())); //|| book.author.toUpperCase.includes(e.target.value.toUpperCase));
        updateTable();
});

//Apartado 2

priceHeader.style.cursor = "pointer";
priceHeader.addEventListener("click", () => {
    ascendingOrder = !ascendingOrder;
    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;";
    displayBooks.sort((book1, book2) => {
        return ascendingOrder ? book1.price - book2.price : book2.price - book1.price;
    });
    updateTable();
});

//Apartado 3

/* const tfoot = document.querySelector("tfoot");
const totalPrice = displayBooks.reduce((priceSum, book) => priceSum + book.price, 0);
tfoot.textContent = `Precio total ${totalPrice}`; */