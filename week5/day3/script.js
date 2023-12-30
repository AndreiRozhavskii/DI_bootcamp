// function showMessage(){
//     console.log(`count 5`);
// }

// // showMessage()

// setTimeout(showMessage, 2*1000)



// let count=5;
// let id;
// function displayCount(){
//     console.log();
//     count--
//     if(count>=0){
//         id=setTimeout(displayCount, 1000)
//     }
//     if(count=3){
//         clearTimeout(id)
//     }
// }
// displayCount();

// const id =setInterval(showMessage, 3000)
// let i =0
// function showMessage(){
//     i++
//     console.log(`count 5 ${i}`);
//     if(i===5){
//         clearInterval(id);
//     }
// }

// function sameCounter(){
//     let count =5;
//     const intervalId=setInterval(function(){
//         console.log(`counter value ${count}
//         `);
//         if(count<=0){
//             clearInterval(intervalId);
//         }
//     },1000)

// }
// sameCounter()



 
  function myMove() {
    let elem = document.querySelector(".inner");
    let pos = 0;
    let id = setInterval(function() {
      if (pos == 350) {
        clearInterval(id);
      }
      
        pos++;
       elem.style.left = pos + "px"; 
       
      
    }, 5);
  }
  