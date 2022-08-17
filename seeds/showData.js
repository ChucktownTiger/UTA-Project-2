// const where the model will be required
const { Show } = require('../models')

const showData = [
    {
        // this is an actual show 
        show_name: 'Succession',
        user_name: 'Jesse Armstrong',
        photo_file: 'mock-poster1',
        show_idea: 'Dysfunctional entrepreneurial family looking for a successor',
        submit_date: 'June 21, 2022 12:00:00'
    },
    {
        show_name: 'Smart and Smarter',
        user_name: 'Nice Guy',
        photo_file: 'mock-poster2',
        show_idea: 'A competitive friendship of two lifelong not-so-friends, who will outdo who?',
        submit_date: 'June 21, 2022 12:00:00'
    },
    {
        show_name: 'Purple Tree',
        user_name: 'Johnny Orangeseed',
        photo_file: 'mock-poster3',
        show_idea: 'A thunderstorm strikes the last great redwood tree, turning it purple. Global chaos follows',
        submit_date: 'June 21, 2022 12:00:00'
    }
];

const seedShows = () => Show.bulkCreate(showData);

module.exports = seedShows;