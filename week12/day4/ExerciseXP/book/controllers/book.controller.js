const { db } = require ('../config/pgconnect.js');

const{
    _readAll,
    _read,
    _create
}= require('../models/book.models.js')


const readAll = (req, res) => {
    _readAll()
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })
}

const read = (req, res) => {
    const { bookId } = req.params;
    _read(bookId)
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })
}

const create = (req, res) => {
    const { title, author, publishedyear} = req.body;
    _create(title, author, publishedyear)
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })
}

module.exports = {
    readAll,
    read,
    create
}