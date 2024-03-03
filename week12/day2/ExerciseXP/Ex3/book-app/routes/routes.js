const express=require('express')

const router=express.Router()

const books = [
    { id: 1, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" },
    { id: 2, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 3, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
    { id: 4, title: "Nineteen Eighty-Four", author: "George Orwell" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" }
    ];
  
router.get('/', (req,res)=>{
    const booklist=books.map((item) =>{
        return {id:item.id, text:item.text};
    });
    res.json(books)

});

router.post('/',(req,res)=>{
    const {title,author} = req.body;
    const newbook={
        id:books.length+1,
        text
    }
    books.push(newbook)
    res.json(books);
});

router.put('/:id', (req,res)=>{
    const{id} = req.params;
    const{title,author} = req.body;

    const indx = books.findIndex(item => item.id==id);
    if(indx===-1) return res.sendStatus(404);

    books[indx] = {...books[indx], title,author};
    res.json(books);
})

router.delete('/:id', (req,res)=>{
    const{id} = req.params;
    const indx = todos.findIndex(item => item.id==id);
    if(indx===-1) return res.sendStatus(404);

    books.splice(indx,1);
    res.json(books);

})

module.exports=router;

