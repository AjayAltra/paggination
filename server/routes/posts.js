const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//GET BACK ALL POST
router.get('/', async (req, res) => {
    try {
        let { page, size } = req.query;
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 10;
        }
        const limit = parseInt(size)
        const skip = (page - 1) * size;
        // const posts = await Post.find({}, {}, { limit: limit, skip: skip });
        const posts = await Post.find().limit(limit).skip(skip);
        const total = await Post.count();
        res.json({
            page,
            size,
            total,
            data: posts,
        });
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})

//DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;