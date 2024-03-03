const knex = require('knex');

const db=knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        port:5432,
        user: 'postgres',
        password:'123456',
        database: 'postgres'
    },
});

module.exports={db}

// console.log(db);

//select

// db.select('id','name','price')
// .from('products')
// .then(rows=>{
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })

//insert
// db('products')
// .insert([
//     {name:"Samsung s23",price:3333}
// ])
// .update({name:'samsung s33'},['*'])
// .del(['*'])
// .where({id:2})
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })