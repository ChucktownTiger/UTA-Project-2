const { Website } = require('../models');

const websiteData = [
  {
    user_name: 'PickleballPro',
    website_name: 'Pickleball Partners',
    website_idea: 'Website to find people to play pickleball with in your area',
    submit_date: 'June 21, 2022 12:00:00'
  },
  {
    user_name: 'SuperBooks',
    website_name: 'Book Trader',
    website_idea: 'Website to trade books amongst your neighbors',
    submit_date: 'June 21, 2022 12:00:00'
  },
];

const seedWebsites = () => Website.bulkCreate(websiteData);

module.exports = seedWebsites;