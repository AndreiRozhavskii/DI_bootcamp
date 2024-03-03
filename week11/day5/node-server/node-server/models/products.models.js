const{db}=require('../config/pgconnect.js')

const _getAllProducts=()=>{
    return db('products').select('id','name','price').orderBy('name');
};

const _search4Product=(name)=>{
    return db('products').whereILike('name',`${name}%`);
}

const _insertProducts=(name,price)=>{
    return db('products').insert({name,price},['*'])
}

module.exports = {
    _getAllProducts,
    _search4Product,

}