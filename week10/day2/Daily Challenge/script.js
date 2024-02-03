const testArray1 = [1, "pear", "banana"];
const testArray2 = ["apple", "pear", "banana","peach"];
const testArray3 = ["apple", "pear", "banana", "melon", "kiwi"];
function makeAllCaps(arr) {
  let counter = 0;
  const promise = new Promise((resolve, reject) => {
    arr.forEach((e) => {
      if (typeof e === "string") {
        counter++;
      }
    });
    if (counter === arr.length) {
      resolve(arr.map((e) => e.toUpperCase()));
    } else {
      reject("Array is not all strings.");
    }
  });
  return promise
    .then((resolve) => {
      console.log(resolve);
    })
    .then(sortWords(arr))
    .catch((error) => {
      console.log(error);
    });
}

function sortWords(capsArr) {
  const promise = new Promise((resolve, reject) => {
    if (capsArr.length > 4) {
      resolve(capsArr.sort());
    } else {
      reject("Array is not bigger than 4.");
    }
  });
  return promise
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((error) => {
      console.log(error);
    });
}