import user from './data.js'

function calculateAverageAge(array) {
    
    let sum = 0;

    for (let person of array) {
    
    sum += person.age;
    }
        let average = sum / array.length;
    
    console.log(average);
}

calculateAverageAge(user);