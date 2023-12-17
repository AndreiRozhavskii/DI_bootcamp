// Exercise 1
let x = 5
let y = 2
if ( x > y){
    console.log("x is the biggest number")
}else{
    console.log("y is the biggest number")
}

// Exercise 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog==="Chihuahua"){
    console.log(`I love ${newDog}'s, it's my favorite dog breed`);
}else{
    console.log(`I don't care, I prefer cats`)
};

//Exercise 3
let k = Number(prompt("Please enter a number"));
if (k % 2 ===0){
    console.log(`${k} is an even number`)
}else{
    console.log(`${k} is an odd number`)
}
//Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
switch (true){
    case users.length === 0:
        console.log("There is no one online")
        break;
    case users.length === 1:
        console.log(`${users[0]} is online`)
        break;
    case users.length === 2:
        console.log(`${users[0]} and ${users[1]} are online`)
        break;
    case users.length>2:
        console.log((`${users[0]}, ${users[1]} and ${users.length - 2} more are online`))
    
}