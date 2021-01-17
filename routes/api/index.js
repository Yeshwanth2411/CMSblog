const router = require('express').Router();

const Post = require('../../models/postModel');
const { response } = require('express');

router.get('/test', (req, res) => {
    res.send("It's Working");
});

router.get('/post', async (req, res) => {
    const getPosts = await Post.find();
    res.status(200).json(getPosts);
});

router.get('/post/:id', async (req, res) => {
    const getPost = await Post.findById(req.params.id);
    res.status(200).json(getPost);
});

router.post('/post', async (req, res) => {
    currDate = new Date();
    const newPost = new Post({
        title: req.body.title,
        createdAt: currDate,
        tags: req.body.tags,
        html: req.body.html
    });
    console.log(newPost);

    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
});

module.exports = router;