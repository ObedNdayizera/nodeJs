const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8000;

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" }
]

//Get all posts
app.get('/api/posts', (req, res) => {
    let limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else {
        res.status(200).json(posts);
    }
})

//Get a single post
app.get('/api/posts/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let post = posts.find(post => post.id == id);

    if (!post) {
        res.status(404).json({ message: `A Post With Id Of ${id} Was Not Found` });
    } else {
        res.status(200).json(post);
    }

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})