const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


//add withAuth middleware to only allow dashboard access if the user is logged in
router.get('/', withAuth, async (req, res) => {

    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;