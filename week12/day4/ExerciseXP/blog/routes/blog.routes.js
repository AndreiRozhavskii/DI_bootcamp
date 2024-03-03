const express = require("express");
const {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} =require('../controllers/controller.js')


const router = express.Router();

router.get('/posts', getAllArticles);

router.get('/posts/:id',getArticleById);

router.post('/posts', createArticle);

router.put('/posts/:id', updateArticle);

router.delete('/posts/:id', deleteArticle);




module.exports = router;
