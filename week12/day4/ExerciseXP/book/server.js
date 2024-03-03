const express = require("express");
const bp = require("body-parser");
const book_router= require("./routes/book_routes.js");

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.listen(5001);

app.use(book_router);