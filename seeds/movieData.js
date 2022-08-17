// const where model is to be required
const { Movie } = require('../models')

const movieData = [
    {
        movie_name: 'Here And Not',
        user_name: 'Isaias',
        photo_file: 'poster-draft-1.jpg',
        movie_idea: 'A gen-Z reality distorted by the many distractions of modern American life',
        submit_date: 'June 21, 2022 12:00:00'
    },
    {
        movie_name: 'The Hot Dog Bun',
        user_name: 'Shauna',
        photo_file: 'poster-draft-2.jpg',
        movie_idea: 'A post-apocalyptic world where global supplies of wheat have been depleted, a lone hot dog bun fights for a brighter future',
        submit_date: 'June 21, 2022 12:00:00'
    },
    {
        movie_name:  '(Redacted)',
        user_name: 'Todd',
        photo_file: 'poster-draft-3.jpg',
        movie_idea: 'A 20 minute black screen accompanied by a cathartic soundtrack, a short journey of reckoning',
        submit_date: 'June 21, 2022 12:00:00'
    }
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;