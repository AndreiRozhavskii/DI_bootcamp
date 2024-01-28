// Exercise 1
//  Data will appear in the address line with metod GET and in the kind of encryption type wirh method POST
//Exercise 3
const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

const marioJSON = JSON.stringify(marioGame, null, 2);
console.log(marioJSON);

// What happens to the nested objects ?
// They are converted into nested objects in the JSON object as well.

