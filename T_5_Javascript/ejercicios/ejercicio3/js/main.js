//Create the constructor
function User (name, firstLastName, secondLastName, email, age, city, productsCount ) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
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

//

users.forEach( (user) => {
    let newOption = document.createElement("option");
    newOption.textContent = user.name;
    select.appendChild(newOption);
});

/* for (const key in users[0]) {
    let newList = document.createElement("li");
    newList.classList.add("list-group-item");
    newList.textContent = `${key}: `;
    list.appendChild(newList);
}; */

select.addEventListener("change", () => {
    for (const key in users) {
        let content = document.createElement("li");
        newList.classList.add("list-group-item");
        newList.textContent = ` ${users[key,value]} `;
        list.appendChild(newList);
    };
} )