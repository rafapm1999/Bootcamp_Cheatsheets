//Constantes
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

//Variables
let posts = [];
let currentPage = 1;

//Selectores
const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

//Utilidades

function fillDiv(array) {
    const newPagePost = paginate(posts, PAGE_SIZE, currentPage);
    postsDiv.innerHTML = "";
    newPagePost.forEach(post => postsDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`);
};

//https://stackoverflow.com/questions/42761068/paginate-javascript-array
function paginate (array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function changePage (event) {
   if (event.target.className === "previousPage" && currentPage > 1) {
     currentPage--;
   } else if(event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE) {
    currentPage++;
   }
    fillDiv();
}
fetch(POSTS_URL)
    .then(r => r.json())
    .then(data => {
        posts = [...data]
        fillDiv()});




