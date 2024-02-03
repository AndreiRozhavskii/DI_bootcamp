const form = document.getElementById("gif-form");
const input = document.getElementById("gif-input");
const button = document.getElementById("gif-button");
const container = document.getElementById("gif-container");


const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const BASE_URL = "https://api.giphy.com/v1/gifs/random";


form.addEventListener("submit", function(event) {

event.preventDefault();

const category = input.value;

fetchGif(category);
});

function fetchGif(category) {
const url = `${BASE_URL}?api_key=${API_KEY}&tag=${category}`;
fetch(url)
.then(function(response) {
if (response.ok) {
return response.json();
} else {
throw new Error("Something went wrong");
}
})
.then(function(data) {
const gifUrl = data.data.images.original.url;
displayGif(gifUrl);
})
.catch(function(error) {
console.error(error);
alert(error.message);
});
}
function displayGif(gifUrl) {

const gif = document.createElement("img");
gif.src = gifUrl;
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.addEventListener("click", function() {
container.removeChild(gif);
container.removeChild(deleteButton);
});
container.appendChild(gif);
container.appendChild(deleteButton);
}

const deleteAllButton = document.getElementById("delete-all-button");
deleteAllButton.addEventListener("click", function() {
while (container.firstChild) {
container.removeChild(container.firstChild);
}
});