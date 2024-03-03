const { db } = require ('../config/pgconnect.js');
const{
    _getAllArticles,
    _getArticleById,
    _createArticle,
    _updateArticle,
    _deleteArticle
}= require('../models/models.js')

const getAllArticles = (req, res) => {
    _getAllArticles()
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })


}

const getArticleById = (req,res)=>{
    const {id}= req.params;
    _getArticleById(id)
    .then(data =>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(404).json({message: 'not found'})
    })

}


const createArticle = (req, res) => {
    const { title, content } = req.body;

    _createArticle(title, content)
    .then(() => {

      res.status(201).json({ message: 'Article created successfully' });
    })
    .catch((error) => {

      console.error('Error creating article:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
}

const updateArticle = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    _updateArticle(id, title, content)
    .then(() => {

        res.status(201).json({ message: 'Article updated successfully' });
      })
      .catch((error) => {

        console.error('Error updating article:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
    }


const deleteArticle = (req, res) => {
    const { id } = req.params;

    _deleteArticle(id)
   .then(() => {
       res.status(204).end(); 
   })
   .catch((error) => {
      
       console.error('Error deleting post:', error);
       res.status(500).json({ error: 'Internal server error' });
   });
}

module.exports ={
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}