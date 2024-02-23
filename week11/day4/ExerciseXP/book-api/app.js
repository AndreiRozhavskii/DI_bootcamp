const express=require('express');
const app=express();

let books = [
    {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedYear: 1979
    },
    {
    id: 2,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954
    },
    {
    id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publishedYear: 1997
    }
    ];


    

app.listen(5000, () => {
       console.log("Server is running on port 5000");
    });

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
    let bookId = req.params.bookId;
    let book = books.find((book) => book.id == bookId);

    if (book) {
    res.status(200).json(book);
    } else {
    res.status(404).send("Book not found");
    }
    });

app.post("/api/books", express.json(), (req, res) => {

        let title = req.body.title;
        let author = req.body.author;
        let publishedYear = req.body.publishedYear;

        if (title && author && publishedYear) {

        let book = {
        id: books.length + 1,
        title: title,
        author: author,
        publishedYear: publishedYear
        };
        books.push(book);
        res.status(201).json(book);
        } else {
        res.status(400).send("Invalid input");
        }
        });