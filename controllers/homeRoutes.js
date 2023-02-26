const router = require('express').Router();
const { Post, Comment, User } = require('../models');

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
            ],
        });
        const reversePost = postData.reverse()
        const posts = reversePost.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into homepage template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    }
                },
            ],
        });
        // res.status(200).json(postData);

        const post = postData.get({ plain: true });
        // Pass serialized data and session flag into post template
        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    //Once the user is logged in, the user should be redirected to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    //Renders login handlebars template on the login page
    res.render('login');
});

router.get('/signup', (req, res) => {
    //Once the user is logged in, the user should be redirected to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    //Renders signup handlebars template on the signup page
    res.render('signup');
});

module.exports = router;
