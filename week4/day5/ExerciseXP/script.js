function playTheGame(){
    let usrAns= "Hi! Want to play?"
    if  (confirm(usrAns) == true){
        let compNum=Math.floor(Math.random() * 10) + 1;
        let usrNum=Number(prompt("Enter the number from 1 up to 10"))
                
        console.log(compNum, usrNum);
        
        if(usrNum<0 || usrNum>10){
            alert("Sorry, out of the area")
        }
        else{
            {
            compareNumbers(usrNum, compNum)
            }
        }
    }
    else{
            alert('No problem, Goodbye');
        }
    }
playTheGame()

function compareNumbers(usrNum, compNum){
    let i=0;
       
        console.log(compNum, usrNum);   
        while(i<2){
            
       
        if(usrNum===compNum){
            alert("WINNER")
            return
        }

        else if(usrNum>compNum){
                usrNum=Number(prompt(`Your number is bigger then the computer’s, guess again`));
                console.log(compNum, usrNum);}
                
        else if(usrNum<compNum){
                usrNum=Number(prompt(`Your number is smaller then the computer’s, guess again`))
                console.log(compNum, usrNum);
            }
                i++;
        }
    alert("out of chances")
    

}  
   

compareNumbers()