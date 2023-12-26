
let count = Number(prompt("Put number of bottles"));
let i=1;
while (count > 0){

console.log(count + " bottles of beer on the wall ");
console.log(count + " bottles of beer! ");
count = count - i;
i=i+1;
if(count<0){
    console.log("Take " + (i) + " one down, pass them around ");
    console.log("No bottles of beer on the wall ");
}
else if (i===1){
    console.log("Take " + i + " one down, pass it around ");
}
else{
    console.log("Take " + i + " one down, pass them around ");
}
}




