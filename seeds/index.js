const sequelize = require('../config/connection');
const seedBooks = require('./bookData');
const seedMovies = require('./movieData');
const seedShows = require('./showData');
const seedWebsites = require('./websiteData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBooks();

  await seedShows();

  await seedWebsites();

  await seedMovies();  

  process.exit(0);
};

seedAll();
