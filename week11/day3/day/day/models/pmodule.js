const {db}=require('../config/pgdb.js');

const getProducts=()=>{
    return db('products').select('id','name','price')
};

const searchProduct=(name)=>{
    return db('products')
    .select('id','name','price')
    .whereILike('name',`%${name}%`)
}

const insertProducts=(name,price)=>{
    return db('products').insert({name,price},['*'])
}

module.exports={
    getProducts,
    searchProduct,
    insertProducts,
}