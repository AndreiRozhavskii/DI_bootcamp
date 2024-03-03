const { db } = require ('../config/pgconnect.js')

const _getAllArticles = () => {
    return db('articles').select("id", "title", "content").orderBy("id")
}

const _getArticleById = (id) => {
    return db('articles').select("id", "title", "content").where("id", id)
}

const _createArticle = (title, content )=>{
    return db('articles').insert({ title: title, content: content })
}

const _updateArticle = (id, title, content )=>{
    return db('articles') .where({ id: id }).update({ title: title, content: content })
}

const _deleteArticle = (id)=>{
    return db('articles').where({ id: id }).del()
}

module.exports = {
    _getAllArticles,
    _getArticleById,
    _createArticle,
    _updateArticle,
    _deleteArticle
}