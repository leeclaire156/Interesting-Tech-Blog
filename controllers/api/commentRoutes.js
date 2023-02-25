const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Get all comments and JOIN with user data
        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const comments = commentData.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into template
        res.render('post', {
            comments,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

//Creates (through POST route) new post from new comment form,
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

module.exports = router;