// const where the model will be required
const { TVShow } = require('../models')

const showData = [
    {
        // this is an actually good show 
        user_name: 'JesseArmstrong',
        tvshow_name: 'Succession',
        tvshow_idea: 'Dysfunctional entrepreneurial family looking for a successor',
        submit_date: 'November 27, 2021 12:00:00'
    },
    {
        user_name: 'NiceGuy',
        tvshow_name: 'Smart and Smarter',
        tvshow_idea: 'A competitive friendship of two lifelong not-so-friends, who will outdo who?',
        submit_date: 'July 3, 2022 11:59:00'
    },
    {
        user_name: 'JohnnyOrangeseed',
        tvshow_name: 'Purple Tree',
        tvshow_idea: 'A thunderstorm strikes the last great redwood tree, turning it purple. Global chaos follows',
        submit_date: 'August 11, 2022 2:00:00'
    }
];

const seedTVShows = () => TVShow.bulkCreate(showData);

module.exports = seedTVShows;