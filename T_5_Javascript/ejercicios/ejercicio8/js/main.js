const url = "https://jsonplaceholder.typicode.com/posts";

const commentContainer = document.querySelector(".container");
let dataArray = [];
let displayArray = [];

function fillPost (array) {
    array.forEach(element => {
        commentContainer.innerHTML +=
        `<h1>${element.title}</h1> 
        <p>${element.body}</p>`
    });
}   

async function requestToTheAPI (url) {
    const r = await fetch(url);
    const data = await r.json();
    dataArray = [...data];
    displayArray = [...dataArray.slice(0, 20)];
    fillPost(displayArray)
};

requestToTheAPI(url);