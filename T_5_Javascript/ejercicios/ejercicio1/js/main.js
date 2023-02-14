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

//Otra solución del video:
/* 
const getImg = document.getElementsByTagName("ul");
const img = document.querySelector("img"); 
function changeImage (e) {
    img.src = e.target.textContent;
}
list.addEventListener("click", changeImage);
*/

//Apartado 4

const ap4Paragraph = document.getElementById("fillableParagraph");
const ap4Input = document.querySelector("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Paragraph.textContent = ap4Input.value;
    ap4Input.value = "";
});

//Apartado 4.2

const ap4Paragraph2 = document.getElementById("fillableParagraph2");
const ap4Input2 = document.querySelectorAll("input")[1];


ap4Input2.addEventListener("input", () => {ap4Paragraph2.textContent = ap4Input2.value;});

//Apartado 5

/* const textArea = document.querySelector("#textareaToValidate");
textArea.addEventListener("input", e => {
    if (e.target.value.length > 15) {
        e.target.style.color = "red";
    } else {
        e.target.style.color = "green";
    }
});
 */
//Solucion con operador ternario

/* const textArea = document.querySelector("#textareaToValidate");
textArea.addEventListener("input", e => {e.target.value.length > 15 ?  e.target.style.color = "red" :  e.target.style.color = "green"}); */

//Otra solucion con operador ternario

const textArea = document.querySelector("#textareaToValidate");
textArea.addEventListener("input", e => {e.target.style.color = e.target.value.length > 15 ? "red" : "green"});

//Apartado 6

const ap6Input = document.getElementById("evenNumberInput");
ap6Input.nextElementSibling.addEventListener("click", () => {
    if (ap6Input.value % 2 === 0){
        ap6Input.style.border = "revert";
    } else {
        ap6Input.style.border = "2px solid red";
    }
});

//Apartado 7

const ulToList = document.querySelector(".ap7Ul");
    for (let i = 1; i <= 10; i++) {
        const newLi = document.createElement("li");
        newLi.textContent = `Element ${i}`;
        ulToList.appendChild(newLi);
    };

//Apartado 8

const newTabButton = document.querySelector("#newTab");
const aInNewTab = document.querySelector("a");
newTabButton.addEventListener("click", () => {
    aInNewTab.target = "_blank";
    window.open(aInNewTab.href, "Google")
});

//Apartado 9 

const colorsParagraph = document.querySelector("#colorParagraph");
const selectColors  = document.querySelector("select");
selectColors.addEventListener("change", e => {
    colorsParagraph.style.color = e.target.value;
});

