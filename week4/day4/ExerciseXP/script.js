//Exercise 1

let div1 = document.querySelector("div")
console.log(div1)
let list= document.querySelector(".list");
let newName=list.children[1]
newName.textContent= "Richard";
console.log(newName)
let ul1=document.querySelector("ul")
let ul1Child= ul1.children[0]
ul1Child.textContent=("Daniel")
let ul2= ul1.nextElementSibling;
ul2Li1= ul2.children[0]
ul2Li1.textContent= "Daniel"
ul2.removeChild(ul2.children[1])

ul1.classList.add("student_list");
ul2.classList.add("student_list");
ul1.classList.add("university", "attendance")

//Exercise 2
let usersDiv = ul2.nextElementSibling;
console.log(usersDiv)
usersDiv.style.backgroundColor= "lightblue"
usersDiv.style.padding= "1em"
let usersUl= (usersDiv.nextElementSibling)
usersUl.children[0].style.display= "none"
usersUl.children[1].style.border= "1px solid black"
let body = document.querySelector("body");
body.style.fontSize="2em"


//Exercise 3
let div3 = document.querySelector("#navBar");
div3.setAttribute("id","socialNetworkNavigations");
let ul3 = div3.children[0]
let newLi= document.createElement("li")
ul3.appendChild(newLi);
newLi.textContent="Logout";

//Exercise 4
const allBooks = [
    {
        "title": "book1",
        "author": "author1",
        "image": "url1",
        "alreadyRead:": "yes"
    },
    {
        "title": "book2",
        "author": "author2",
        "image": "url2",
        "alreadyRead:": "no"    
    }
]
let obj1= allBooks[0]
let obj2= allBooks[1]
let bookDiv = document.querySelector(".listBooks");
// console.log(bookDiv)
const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
const tr = document.createElement("tr")
const th1 = document.createElement("th1") 
const th2 = document.createElement("th2")
const th3 = document.createElement("th3")
container.append(tbl);
tr.append(th1,th2,th3);
tbl.append(tr);
th1.innerText="Title";
th2.innerText="Author";
th3.innerText="Image";

for (let book in allBooks){
    const bookTr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const img=document.createElement("img");

    td1.innerText = book.title;
    td2.innerText = book.author;
    img.setAttribute("src", book.image)
    td3.append(img)
    bookTr.append(td1,td2,td3);
    tbl.append(bookTr);
    if(book.alreadyRead){
        bookTr.style.color="red"
    }

}

    