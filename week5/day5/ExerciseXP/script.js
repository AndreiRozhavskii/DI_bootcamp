 let color_col=3;
 let color_row=7;
 let color_count = color_col*color_row;
 let main_count=60*40;
 
 
    const side=document.getElementById("sidebar")
    const clear=document.getElementById("clear")
    const main=document.getElementById("main")
    const body =document.getElementsByTagName("body")[0]

    let color=null;
    let mousedown=false;

    body.addEventListener("mousedown", function(event){
        mousedown=true;
    });
   
    body.addEventListener("mouseup", function(event){
        mousedown=false;
    });
  
  
    for(let i=0; i<color_count; i++){
        let div=document.createElement("div");
        div.style.backgroundColor=generateRandomColor();
        div.addEventListener("click", function(event){
            color = event.target.style.backgroundColor;

        })
        side.appendChild(div);
    }



    for(let i=0;i<main_count;i++){
        let div=document.createElement("div")
        div.addEventListener("mousedown",function(event){
if (color!= null){
    event.target.style.backgroundColor=color;
}
        })
        div.addEventListener("mouseover", function(event){
            if (color!= null && mousedown){
                event.target.style.backgroundColor=color;}
        })
        main.appendChild(div);
    };
 


    function generateRandomColor(){
        let letters="0123456789ABCDEF"
        let color="#";
        for (let i=0;i<6; i++){
        let random = Math.floor(Math.random()*16);
        color+=letters[random];}
        return color
    }



  
 
 