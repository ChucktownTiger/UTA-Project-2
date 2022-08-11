const { Book } = require('../models');

const bookData = [
  {
    user_name: 'CodeLearner',
    book_name: 'BootCamp Coding For Dummies',
    book_idea: 'Book about how to choose and succeed in a coding bootcamp',
    submit_date: 'June 21, 2022 12:00:00'
  },
  {
    user_name: 'SuperBooks',
    book_name: 'Frontline Ukraine',
    book_idea: 'Story of a Super Hero saving Ukraine and defeating Putin',
    submit_date: 'June 21, 2022 12:00:00'
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;