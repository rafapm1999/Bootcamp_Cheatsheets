//Constantes
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Selectores
const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Utilidades

function fillDiv(array) {
    postsDiv.innerHTML = "";
    array.forEach(post => postsDiv.innerHTML += `<h3>${post.title}</h3><p>${post.body}</p>`);
};

//https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate (array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function changePage () {

}
fetch(POSTS_URL)
    .then(r => r.json())
    .then(data => fillDiv(data));

