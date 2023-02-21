const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


//Homepage is accessible without logging in
router.get('/', async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                // {
                //     model: Comment,
                //     attributes: [
                //         'title',
                //         'body',
                //         'created_at',
                //     ],
                //     include: {
                //         model: User,
                //         attributes: ['username'],
                //     }
                // },
            ],
        });
        const reversePost = postData.reverse()
        const posts = reversePost.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);


router.get('/login', (req, res) => {
    //Once the user is logged in, the user should be redirected to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

//add withAuth middleware to only allow dashboard access if the user is logged in
router.get('/dashboard', withAuth, async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('dashboard');
});


module.exports = router;
