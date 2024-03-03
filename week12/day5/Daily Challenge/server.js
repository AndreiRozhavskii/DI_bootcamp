const express = require('express');
const app = express();
const bp = require("body-parser");
const bcrypt = require('bcrypt');
const fs = require('fs');
const usersFilePath = './config/users.json';
const routes = require('./routes/routes.js');

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(routes);

app.use("/", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
