const router = require('express').Router();
const { Post } = require('../../models');

//Creates (through POST route) new post from sign up form
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;