function playTheGame(){
    let usrAns= "Hi! Want to play?"
    if  (confirm(usrAns) == true){
        let usrNum=Number(prompt("Enter the number from 1 up to 10"))
        if (typeof usrNum !=="number"){
            alert("Sorry Not a Number, bye!")
        }
        if(usrNum<0 || usrNum>10){
            alert("Sorry, out of the area")
        }
        else{
            const compNum=Math.floor(Math.random() * 10) + 1; 
            if(usrNum==compNum){
                        alert("WINNER")
                    }
                    else {       
                        while(usrNum!==compNum){
                        if(usrNum<compNum){
                            usrNum=Number(promt("Your number is smaller then the computer’s, guess again"))
                            }
                        if(usrNum>compNum){
                            usrNum=Number(promt("Your number is bigger then the computer’s, guess again"))
                        }   
                        
                
                    }
                }
                  
        //    compareNumbers(usrNum,compNum);
       }
     }
 }

playTheGame()

// function compareNumbers(usrNum, compNum){
    
//     if(usrNum==compNum){
//         alert("WINNER")
//     }
//     else {       
//         while(usrNum!==compNum){
//         if(usrNum<compNum){
//             Number(promt("Your number is smaller then the computer’s, guess again"))
//             }
//         if(usrNum>compNum){
//             Number(promt("Your number is bigger then the computer’s, guess again"))
//         }   
        

//     }
// }
  


   
   
// }
// compareNumbers()