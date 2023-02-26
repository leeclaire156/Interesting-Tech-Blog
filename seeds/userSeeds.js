const { User } = require('../models');

const userData = [
    {
        username: "technomanic2023",
        password: "t3chRul3z",
    },
    {
        username: "fan-natic",
        password: "corsairIsTheBest",
    },
    {
        username: "rudeDude",
        password: "blahblahblah",
    },
];

// Export the function
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;