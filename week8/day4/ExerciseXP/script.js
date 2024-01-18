//Exercise 1
//Analyze these pieces of code before executing them. What will be the outputs ?
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];

//result will be array with all items
console.log(result);

const country = "USA";
//result will be array with 3 letters U,S,A 
console.log([...country]);

let newArray = [...[,,]];
//some kind of error...
console.log(newArray);
//array of 2 undefined items

//Exercise 2

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this : 
const welcomeStudents = users.map(
(user) => `Hello ${user.firstName}`
 );
   
 console.log(welcomeStudents);

// Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(
(user) => user.role === "Full Stack Resident"
    );
    
console.log(fullStackResidents);

//Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const fullStackLastNames = users
.filter((user) => user.role === "Full Stack Resident")
.map((user) => user.lastName);

console.log(fullStackLastNames);

//Exercise 3

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((acc, cur) => acc + " " + cur);

console.log(sentence);

//Exercise 4 
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

//Using the filter() method, create a new array, containing the students that passed the course.               
const passedStudents = students.filter((student) => student.isPassed);

console.log(passedStudents);


//Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
students
.filter((student) => student.isPassed)
.forEach((student) => {
console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});