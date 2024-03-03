const express = require("express");
const {
    readAll,
    read,
    create
} =require('../controllers/books.controller.js')


const router = express.Router();

router.get('/api/books', readAll);

router.get('/api/books/:bookId',read);

router.post('/api/books', create);


module.exports = router;