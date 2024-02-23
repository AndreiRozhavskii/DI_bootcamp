const express = require('express');
const { fetchPosts } = require('./data/dataService.js');
const app=express();

app.listen(5000, () => {
    console.log("Server is running on port 5000");
 });

app.get('/posts', async (req, res) => {
    try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Data retrieved and sent successfully');
    } catch (error) {
    res.status(500).send(error.message);
    }
    });
    