const { db } = require ('../config/pgconnect.js')

const _registerUsers = ( email, username, first_name, last_name) =>{
    return db('users').insert({
        email,
        username,
        first_name,
        last_name
    });
    
}

const _registerHashpwd =(username, hashedPassword,) => {
    return  db('hashpwd').insert({
        username,
        password: hashedPassword
    });
}

const _login = (username) => {
    return db('hashpwd').select("username", "password").where("username", username)
}

module.exports = {
    _registerUsers,
    _registerHashpwd,
    _login

}