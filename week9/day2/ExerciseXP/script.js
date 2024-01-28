//Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);//output will be: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2: Display Student Info


function displayStudentInfo(objUser) {

    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
    }
    console.log(displayStudentInfo({ first: "Jonh", last: "Doe" }));


//Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);
console.log(usersArray);

const modifiedArray = usersArray.map(([key, value]) => [key, value * 2]);
console.log(modifiedArray);

//Exercise 4 : Person Class

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member); // output will be object

  //Exercise 5 : Dog Class

  
//Exercise 6


class Animal {

    constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
    }
    }
    

    class hAnimal extends Animal {
    sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
    }
    
    let farmerCow = new hAnimal("Lily", "cow", "brown and white");
    console.log(farmerCow.sound("Moooo"));

    