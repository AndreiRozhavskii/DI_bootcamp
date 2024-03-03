const { db } = require ('../config/pgconnect.js');
const bcrypt = require('bcrypt');

const{
    _registerUsers,
    _registerHashpwd,
    _login,

}= require('../models/models.js');
const { json } = require('body-parser');


const register = (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).send('Error hashing password');
        }
        Promise.all([
            _registerUsers(email, username, first_name, last_name),
            _registerHashpwd(username, hashedPassword)
        ])
        .then(() => {
            res.status(201).json({ message: 'User registered successfully' });
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
       
    });
}

const login = (req, res)=> {
    const { username, password } = req.body;
    _login(username)
    .then(data =>{
        res.json(data)
    })
    .then(obj =>{
    console.log(obj)

    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })
}

module.exports = {
    register,
    login,

}