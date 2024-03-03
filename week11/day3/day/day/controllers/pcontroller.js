const {getProducts,searchProduct,insertProducts}=require('../models/pmodule.js')

const getAllProducts = (req,res)=>{
    getProducts()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(404).json({msg:'not found'})
    })
}

const search4Product = (req, res) => {

    const { name } = req.query;
    searchProduct(name)
    .then(data=>{
      res.json(data)
    })
    .catch(err=>{
      console.log(err);
      res.status(404).json('no product')
    })
}

const createNewProduct = (req, res) => {
    
    const { name, price } = req.body;
    insertProducts(name,price)
    .then(data=>{
      res.json(data)
    })
    .catch(err=>{
      console.log(err);
      res.status(404).json('no product')
    })
}
module.exports={
    getAllProducts,
    search4Product,
    createNewProduct
};