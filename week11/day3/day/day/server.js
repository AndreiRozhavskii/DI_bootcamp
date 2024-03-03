const express=require('express')
const prouter=require('./routes/prouter.js')


const app=express();

app.use(express.urlencoded({extends:true}))
app.use(express.json());


app.use("/", express.static(__dirname + "/public"));

app.listen(3003,()=>{
    console.log('run on 3003');
})

app.use(prouter)


