const express=require('express')
const router = require('./routes/routes.js')
const bp=require('body-parser');

const app=express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());



app.use("/todos", router);
app.use("/todos/:id", router);


app.listen(3002)
