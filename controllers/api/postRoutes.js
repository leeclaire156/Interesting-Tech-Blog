const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//Creates (through POST route) new post from new post form,
// but only if the user is logged in (withAuth)
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id, //Connects post with its creator, the logged in user
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;