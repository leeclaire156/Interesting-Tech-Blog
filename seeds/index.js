// Import all of the functions which will seed the array within each document
const seedUser = require('./userSeeds');
const seedPost = require('./postSeeds');
const seedComment = require('./commentSeeds');

// Make sure to import sequelize in order to connect to the sql database
const sequelize = require('../config/connection');


// Run a function which goes over all of the functions and the console logs whether it was successfully seeded
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPost();
    console.log('\n----- POSTS SEEDED -----\n');

    await seedComment();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

// Call the function
seedAll();
