//Create the constructor
function User (name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
    this.incrementProducts = function () {
        this.productsCount++;
    };
    this.emptyProducts = function () {
        this.productsCount = 0;
    };
};
//Make de data information
const users = [
    //Todos estos new son instancias de User
    new User("Fran", "Gomez", "Fernandez", "fgomez@gmail.com", 25, "Málaga"),
    new User("Raul", "Gomez", "Ruiz", "rgomez@gmail.com", 30, "Málaga"),
    new User("Luis", "Gomez", "Morán", "luisgomez@gmail.com", 45, "Málaga"),
];

/* users.forEach(user => console.log(user.email));
console.log(users[0] instanceof User); */ //Esto me dice si es una instancia o no (true es que si y false es que no)

//Select items of the DOM

const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");

//Rellenar select con opciones

users.forEach( (user) => {
    let newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
  
});

function createList (a) {
    list.innerHTML = "";
    for (const propertyName in users[a]) {
    const value = users[a][propertyName];

    if (typeof value !== "function") {
    let newList = document.createElement("li");
    newList.classList.add("list-group-item");
    newList.innerHTML = `<b>${propertyName}:</b> ${value}`;
    list.appendChild(newList);

    //Todo lo de arriba se podría sustituir por:
    //list.innerHTML += `<li class="list-group-item" <b>${propertyName}:</b> ${value} > 
    //Tendria la misma funcionalidad
}};
};

function selectedUser() {
    const selectedUser = users.find(user => user.name === select.value);
    const numberOfSelectedUser = users.indexOf(selectedUser);
    return numberOfSelectedUser
};

function processProducts (e) {
    e.target === incrementButton ? users[selectedUser()].incrementProducts() : users[selectedUser()].emptyProducts();
    createList(selectedUser()); 
};

createList(0);



//Añadir Listeners
select.addEventListener("change", (e) => {
    createList(selectedUser());
    }  
);

incrementButton.addEventListener("click", processProducts);

emptyButton.addEventListener("click", processProducts); 
