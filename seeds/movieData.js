// const where model is to be required
const { Movie } = require('../models')

const movieData = [
    {
        title: 'Here And Not',
        creator: 'Isaias',
        photo_file: 'poster-draft-1.jpg',
        description: 'A gen-Z reality distorted by the many distractions of modern American life'
    },
    {
        title: 'The Hot Dog Bun',
        creator: 'Shauna',
        photo_file: 'poster-draft-2.jpg',
        description: 'A post-apocalyptic world where global supplies of wheat have been depleted, a lone hot dog bun fights for a brighter future'
    },
    {
        title:  '(Redacted)',
        creator: 'Todd',
        photo_file: 'poster-draft-3.jpg',
        description: 'A 20 minute black screen accompanied by a cathartic soundtrack, a short journey of reckoning'
    }
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;