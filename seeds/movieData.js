// const where model is to be required
const { Movie } = require('../models')

const movieData = [
    {
        user_name: 'BottleShatter',
        movie_name: 'Here And Not',
        movie_idea: 'A gen-Z reality distorted by the many distractions of modern American life',
        submit_date: 'August 3, 2022 1:15:00'
    },
    {
        user_name: 'TreesAreNice',
        movie_name: 'The Hot Dog Bun',
        movie_idea: 'A post-apocalyptic world where global supplies of wheat have been depleted, a lone hot dog bun fights for a brighter future',
        submit_date: 'August 2, 2022 2:00:00'
    },
    {
        user_name: 'EveryThursday',
        movie_name:  '(Redacted)',
        movie_idea: 'A 20 minute black screen accompanied by a cathartic soundtrack, a short journey of reckoning',
        submit_date: 'August 1, 2022 1:00:00'
    }
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;