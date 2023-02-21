const router = require('express').Router();
const { Post } = require('../../models');

//Creates (through POST route) new post from new post form
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;