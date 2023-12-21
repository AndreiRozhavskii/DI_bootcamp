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

//Exercise 4 (Unsucessful)
let allBooks = [
    {
        "title": "somebook",
        "author": "someauthor",
        "image": "a url",
        "alreadyRead:": "false"
    },
    {
        "title": "somebook2",
        "author": "someauthor2",
        "image": "a url2",
        "alreadyRead:": "false"    
    }
]
let obj1= allBooks[0]
let obj2= allBooks[1]
let bookDiv = document.querySelector(".listBooks");
console.log(bookDiv)
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody"); 
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("tr");
            for (let k=0; k< 4; k++){
                let cell = document.createElement("td");
                let cellText = document.createTextNode(obj1) 
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row)
            tbl.appendChild(tblBody);
            
            document.body.appendChild(tbl);
            
            tbl.setAttribute("border", "2");
        }
    
