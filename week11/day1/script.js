const url='https://users-18kl.onrender.com/usersjson';

fetch(url)

.then((res)=>{
   return res.text()
})
.then(txt=>{
    console.log(txt);
})
.catch(Error=>{
    console.log('error=>', Error.message);
})
console.log('after');