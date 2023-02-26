const { Comment } = require('../models');

const commentData = [
    {
        body: "snore",
        post_id: "1",
        user_id: "3",
    },
    {
        body: "Uncalled for",
        post_id: "1",
        user_id: "1",
    },
    {
        body: "I feel you, these scalpers are ruining everything dude.",
        post_id: "2",
        user_id: "2",
    },
    {
        body: "#RespectTheHustle",
        post_id: "2",
        user_id: "3",
    },
];

// Export the function
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;