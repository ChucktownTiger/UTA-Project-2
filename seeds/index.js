const sequelize = require('../config/connection');
const seedBooks = require('./bookData');
const seedMovies = require('./movieData');
const seedTVShows = require('./showData');
const seedWebsites = require('./websiteData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBooks();

  await seedUsers();

  await seedTVShows();

  await seedWebsites();

  await seedMovies();  
  
  await seedUsers();

  process.exit(0);
};

seedAll();
