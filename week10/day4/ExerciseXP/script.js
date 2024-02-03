//Exercise 1
const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
.then(function(response) {
if (response.ok) {
return response.json();
} else {
throw new Error("Something went wrong");
}
})
.then(function(data) {
console.log(data);
})
.catch(function(error) {
console.error(error);
alert(error.message);
});

//Exercise 2

const apiUrl1 = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl1)
.then(function(response) {
if (response.ok) {
return response.json();
} else {
throw new Error("Something went wrong");
}
})
.then(function(data) {
console.log(data);
})
.catch(function(error) {
console.error(error);
alert(error.message);
});

//Exercise 4

//When running asycCall(), first we will console log 'calling' ,
//after that we will call resolevAfter2Seconds(), which will return a new promise
// with resolve "resolved" after 2 seconds.
//after that we will console.log(result)- wich is the resolve from other function.