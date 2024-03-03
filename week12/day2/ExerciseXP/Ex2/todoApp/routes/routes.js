const express=require('express')

const router=express.Router()

const todos = [
    {id:1, text:'buy food'},
    {id:2,text:'meet with Ann'},
    {id:3, text:'Go to the gym'}
];

  
router.get('/', (req,res)=>{
    const tasklist=todos.map((item) =>{
        return {id:item.id, text:item.text};
    });
    res.json(todos)

});

router.post('/',(req,res)=>{
    const {text} = req.body;
    const newtask={
        id:todos.length+1,
        text
    }
    todos.push(newtask)
    res.json(todos);
});

router.put('/:id', (req,res)=>{
    const{id} = req.params;
    const{text} = req.body;

    const indx = todos.findIndex(item => item.id==id);
    if(indx===-1) return res.sendStatus(404);

    todos[indx] = {...todos[indx], text};
    res.json(todos);
})

router.delete('/:id', (req,res)=>{
    const{id} = req.params;
    const indx = todos.findIndex(item => item.id==id);
    if(indx===-1) return res.sendStatus(404);

    todos.splice(indx,1);
    res.json(todos);

})

module.exports=router;

