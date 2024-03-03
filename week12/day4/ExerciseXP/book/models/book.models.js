const { db } = require ('../config/pgconnect.js')

const _readAll = () => {
    return db('books').select("id", "title", "author", "publishedyear").orderBy("id")
}

const _read = (bookId) => {
    return db('books').select("id", "title", "author", "publishedyear").where("id", bookId)
}

const _create = (title, author, publishedyear )=>{
    return db('books').insert({ title: title, author: author, publishedyear: publishedyear })
}

module.exports = {
    _readAll,
    _read,
    _create
}
