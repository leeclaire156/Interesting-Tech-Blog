const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

//Creates (through POST route) new comment from new comment form,
// but only if the user is logged in (withAuth)
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id, //Connects comment with its creator, the logged in user
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Deletes comment but only if user is logged in
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'Unable to delete comment' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Updates comment but only if user is logged in
router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'Unable to update comment' });
            return;
        } else {
            Comment.update(req.body, {
                where: {
                    id: req.params.id,
                },
            })
        };

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;