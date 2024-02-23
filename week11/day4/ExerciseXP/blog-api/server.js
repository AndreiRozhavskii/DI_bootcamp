const express=require('express');
const app=express();

let posts = [
    {
    id: 1,
    title: "Hello World",
    content: "This is my first blog post."
    },
    {
    id: 2,
    title: "Express is awesome",
    content: "I'm learning how to use Express to create a RESTful API."
    },
    {
    id: 3,
    title: "Node.js is cool",
    content: "Node.js is a powerful and versatile platform for web development."
    }
    ];


app.get("/posts", (req, res) => {
   
    res.json(posts);
    });
    
    
    app.get("/posts/:id", (req, res) => {
  
    let id = req.params.id;
    let post = posts.find((post) => post.id == id);    
    if (post) {
        res.json(post);
        } else {
       
        res.status(404).send("Post not found");
        }
        });


app.post("/posts", (req, res) => {

    let title = req.body.title;
    let content = req.body.content;

    if (title && content) {
    let post = {
    id: posts.length + 1,
    title: title,
    content: content
    };      
    posts.push(post);

    res.json(post);
    } else {
    res.status(400).send("Invalid input");
    }
    });


app.put("/posts/:id", (req, res) => {

    let id = req.params.id;
    let title = req.body.title;
    let content = req.body.content;

    if (title && content) {

    let post = posts.find((post) => post.id == id);

    if (post) {
    post.title = title;
    post.content = content;
    res.json(post);
    } else {
    res.status(404).send("Post not found");
    }
    } else {
    res.status(400).send("Invalid input");
    }
    });
    

app.delete("/posts/:id", (req, res) => {

    let id = req.params.id;
    let index = posts.findIndex((post) => post.id == id);

    if (index > -1) {
    posts.splice(index, 1);
    res.status(204).send();
    } else {
    res.status(404).send("Post not found");
    }
    });

app.listen(3005);

