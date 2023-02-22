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

//Selectors

const booksTbody = document.getElementById("booksBody");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");


//Function

//Opcion 1

/* function updateTable() {
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
} */

//Button logic
/* 
booksTbody.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON")
    books = books.filter(book => book.id != e.target.id); //AL no poner solo un igual hacemos qu elña comparacio no sea estricta con lo cual no debemos parsear a Number el e.taget.id(es un numero pero string)
    updateTable();
}); */
//------------------------------------------------------
//Opcion 2

/* function updateTable() {
    booksTbody.innerHTML = "";
    books.forEach(book => {
        const newTr = document.createElement("tr")
        for (let property in book) {
                const newTd = document.createElement("td");
                newTd.textContent = book[property];
                newTr.appendChild(newTd)
            }
        
        const newRemoveButton = document.createElement("button");
        newRemoveButton.classList.add("btn", "btn-danger");
        newRemoveButton.id = book.id;
        newRemoveButton.textContent = "Remove";

        newRemoveButton.addEventListener("click", e => {
            books = books.filter(book => book.id != e.target.id);
            updateTable();
        });
        newTr.appendChild(newRemoveButton);

        booksTbody.appendChild(newTr);
    });
} */
//----------------------------------------------------------
//Opcion 3

function updateTable() {
    booksTbody.innerHTML = ""; //Vaciamos el tbody al completo
    
    
    books.forEach(book => { //Generamos cada fila una a una, de la forma más sencilla
        let bookDataTds = "";
        for (let property in book){
            bookDataTds += `<td>${book[property]}</td>`;
        }
        booksTbody.innerHTML += `
        <tr>
            ${bookDataTds}
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;
    });
}

booksTbody.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON")
    books = books.filter(book => book.id != e.target.id); //AL no poner solo un igual hacemos qu elña comparacio no sea estricta con lo cual no debemos parsear a Number el e.taget.id(es un numero pero string)
    updateTable();
});



updateTable(); //Llamamos a la function 


addBookButton.addEventListener("click", e => {
    e.preventDefault(); //CON ESTO HACEMOS QUE EL COMPORTAMIENTO POR DEFECTO QUE GENERA LOS BOTONES DE TIPO SUBMIT DESAPAREZCA (evita que recargue la pagina)
    const newId = books[books.length - 1].id + 1;
    books.push( new Book( newId, titleInput.value, authorInput.value, salesInput.value, priceInput.value));
    updateTable();

   /*  titleInput.value = "";

    authorInput.value = "";

    salesInput.value = "";

    priceInput.value = ""; */

    addBookButton.parentNode.reset();
});


