const express=require('express')
const router = require('./routes/route.js')

const app=express()

app.use(express.json());


app.use("/", router);
app.use("/about", router);

app.listen(3002)