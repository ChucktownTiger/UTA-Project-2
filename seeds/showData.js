// const where the model will be required
const { Show } = require('../models')

const showData = [
    {
        // this is an actual show 
        title: 'Succession',
        creator: 'Jesse Armstrong',
        photo_file: 'mock-poster1',
        description: 'Dysfunctional entrepreneurial family looking for a successor'
    },
    {
        title: 'Smart and Smarter',
        creator: 'Nice Guy',
        photo_file: 'mock-poster2',
        description: 'A competitive friendship of two lifelong not-so-friends, who will outdo who?'
    },
    {
        title: 'Purple Tree',
        creator: 'Johnny Orangeseed',
        photo_file: 'mock-poster3',
        description: 'A thunderstorm strikes the last great redwood tree, turning it purple. Global chaos follows'
    }
];

const seedShows = () => Show.bulkCreate(showData);

module.exports = seedShows;