// //Exercise 1 example 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,1,"Jason");
people.push("Daniel");
console.log(people.indexOf("Mary"));
let arr = people.slice(1);
people.indexOf("foo");// Foo doesn't exist in array
let last = people[people.length - 1];
console.log(last);

// //Exercise 1 example 2
for (let i = 0; i<people.length;i++){
    console.log(people[i]);
}

for (let i = 0; i<people.length; i++){
    if (i ===3){
    break;}
    console.log(people[i])
}

//  //Exercise 2

let colors= ["red", "yellow", "blue", "green"]
    for (let i=0; i < colors.length; i++){
        if (i===0) {console.log(`${colors[i]} is my choice #1!`)
            }else if(i===1){console.log(`${colors[i]} is my choice #2!`)
            }else if(i===2){console.log(`${colors[i]} is my choice #3!`)
            }else {console.log(`${colors[i]} is choice #4!`)}
    }

//Exercise 3
let num = Number(prompt("Hello user. Enter a number."));
while ( num < 11){
    num = Number(prompt("Hello user. Enter a number.")); 
}

//Exercise 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor);
console.log(`${building.nameOfTenants[0]} ${building.numberOfRoomsAndRent.sarah[0]}`);
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]= 1200
}
console.log(building);

//Exercise 5
let family={
    dad: "Moshe",
    mom: "Sara",
    son: "Lev",
    daughter: "Noa"
}
for (const i in family){
    console.log(i)
}
for (const i in family){
    console.log(family[i])
}

//Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  for (let i in details){
    console.log(`${Object.keys(details)[0]} ${Object.values(details)[0]} ${Object.keys(details)[1]} ${Object.values(details)[1]} ${Object.keys(details)[2]} ${Object.values(details)[2]}`);
  }
//Exercise 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
console.log(names);

let soc= names.map((name) => name[0]).join('');
console.log(soc);
