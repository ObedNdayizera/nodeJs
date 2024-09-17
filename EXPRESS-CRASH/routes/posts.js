import express from 'express';
const router = express.Router();

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" }
]

//Get all posts

router.get('/', (req, res) => {
    let limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
})

//Get a single post

router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let post = posts.find(post => post.id == id);

    if (!post) {
        let error = new Error(`A Post With Id Of ${id} Was Not Found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);

})

//Create New Post
router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!newPost.title) {
        let error = new Error(`Please Include A Title`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
})

//Update post
router.put('/:id', (req, res) => {
    // let id = parseInt(req.params.id);
    // let index = posts.findIndex(p => id == p.id);

    // if (index == -1) {
    //     return res.status(201).json({ msg: "Please specific right post" });
    // }

    // let updPost = {
    //     id,
    //     title: req.body.title || posts[index].title
    // }

    // posts[index] = updPost;

    // res.status(201).json(posts);




    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
})


// Delete Post
router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter(post => post.id !== id);
    res.status(200).json(posts);


})

export default router;