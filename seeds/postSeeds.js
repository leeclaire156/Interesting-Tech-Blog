const { Post } = require('../models');

const postData = [
    {
        title: "Did you know?",
        body: "The binary system is heavily influenced by knitting. #WomenInStem",
        user_id: "1",
    },
    {
        title: "Anyone else feeling like PC parts are getting too expensive???",
        body: "It's not just me, right?",
        user_id: "1",
    },
    {
        title: "Corsair Rules!",
        body: "The RGB is so cute, I wanna get a custom fan cover for mine~",
        user_id: "2",
    },
];

// Export the function
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;