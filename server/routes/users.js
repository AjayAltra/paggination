const { response } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get All Users
router.get('/', async (req, res) => {
    try {
        let { page, size } = req.query;
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 10;
        }
        const limit = parseInt(size);
        const skip = (page - 1) * size;
        const users = await User.find().limit(limit).skip(skip);
        const total = await User.count();
        res.json({
            page, size, total,
            data: users,
        });
    } catch (err) {
        res.json({ message: err });
    }
});

//Submits a User
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

//Get a specific User
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});


//Update a post
router.patch('/:userId', async (req, res) => {
    console.log(req.body);
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            { $set: { email: req.body.email } }
        );
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;