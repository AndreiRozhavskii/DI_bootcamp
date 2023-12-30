let form =document.forms[0];
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let noun= form.noun.value;
    let adjective= form.adjective.value;
    let person= form.person.value;
    let verb= form.verb.value;
    let place= form.place.value;
    if(noun.trim().length > 0 && adjective.trim().length > 0 && person.trim().length > 0 && verb.trim().length > 0 && place.trim().length > 0){
        console.log(`Story about the ${noun} and ${person} who helps me with it. That story was ${adjective}. It happened in ${place} and you totaly can ${verb} with it.`)
        form.noun.value='';
        form.adjective.value='';
        form.person.value='';
        form.verb.value='';
        form.place.value='';     
    }
    else{ console.log("Please fill out all the inputs")
    }
})
