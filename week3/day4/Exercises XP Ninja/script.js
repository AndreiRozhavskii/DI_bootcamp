//Exercise 1
let year1 = Number(prompt("Please enter the year you were born:"));
let year2 = Number(prompt("Please enter the year you were born:"));

let outputYear;
if (year1 < year2) outputYear = year2*2 - year1;
else outputYear =  year1*2 - year2;
alert(outputYear);



//Exercise 2

let zip = (prompt("What is your zip code ?"));
let zipNum = Number(zip);
switch(true){
    case zip.length===5 && !isNaN(zipNum):
        alert("Success");
    break;
    default: alert("Fail")
}
