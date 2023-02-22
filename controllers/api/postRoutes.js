const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates (through POST route) new post from new post form,
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


// Deletes post but only if user is logged in
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;