//Apartado 1
//Partimos de un HTML con un Div vacío. Con JS añadimos dos elementos p con un texto dentro

let myDiv = document.getElementsByTagName("div")[0];
console.log(myDiv);

let p1 = document.createElement("p");
p1.textContent = "Hola futuro 1";
// myDiv.appendChild(p1);
let p2 = p1.cloneNode(true);
// myDiv.appendChild(p2);
p2.textContent += ".2";
myDiv.append(p1, p2);

//Apartado 2

let changeBg = document.getElementsByTagName("button")[0];
changeBg.addEventListener("click", function (e) {
    document.body.style.backgroundColor = "red";
});

//Apartado 3

const getImg = document.getElementsByTagName("li");
const img = document.querySelector("img");
getImg[0].addEventListener("click", changeImage);
getImg[1].addEventListener("click", changeImage);
getImg[2].addEventListener("click", changeImage);

function changeImage (e) {
    img.src = e.target.textContent;
}