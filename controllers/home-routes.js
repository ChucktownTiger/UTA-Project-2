const router = require('express').Router();
const { Movie, Book, Show, Website, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

/*  -------------
      HOMEPAGE
    ------------- 
*/

// GET homepage
router.get('/', async (req, res) => {
    res.render('homepage', {
      Book,
      Movie,
      Show,
      Website,
      loggedIn: req.session.loggedIn,
    });
  });

/*  ---------------
        BOOKS
    --------------- 
*/

// GET the books page
router.get('/book', async (req, res) => {
  try {
    const dbBookData = await Book.findAll({
      include: [
        {
          model: Book,
          attributes: ['book_name', 'book_idea'],
        },
      ],
    });

    const book = dbBookData.map((book) =>
      book.get({ plain: true })
    );

    res.render('book', {
      book,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET book
// Use the custom middleware before allowing the user to access the books page
router.get('/book/:id', withAuth, async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: [
            'id',
            'book_name',
            'user_name',
            'submit_date',
            'img_name',
            'book_idea',
          ],
        },
      ],
    });

    const book = dbBookData.get({ plain: true });
    res.render('book', { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new book idea
router.post('/new_book_idea', async (req, res) => {
  try {
    const dbBookData = await NewBookIdea.create({
      user_name: req.body.user_name,
      book_name: req.body.book_name,
      book_idea: req.body.book_idea,
      submit_date: req.body.submit_date
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbBookData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*  ---------------
        MOVIES
    --------------- 
*/

// GET the movies page
router.get('/movie', async (req, res) => {
  try {
    const dbMovieData = await Movie.findAll({
      include: [
        {
          model: Idea,
          attributes: ['movie_name', 'movie_idea'],
        },
      ],
    });

    const movie = dbMovieData.map((movie) =>
      movie.get({ plain: true })
    );

    res.render('movie', {
      movie,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET movie
// Use the custom middleware before allowing the user to access the books page
router.get('/movie/:id', withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: Idea,
          attributes: [
            'id',
            'movie_name',
            'user_name',
            'submit_date',
            'img_name',
            'movie_idea',
          ],
        },
      ],
    });

    const movie = dbMovieData.get({ plain: true });
    res.render('movie', { movie, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new movie idea
router.post('/new_movie_idea', async (req, res) => {
  try {
    const dbMovieData = await NewMovieIdea.create({
      user_name: req.body.user_name,
      movie_name: req.body.movie_name,
      movie_idea: req.body.movie_idea,
      submit_date: req.body.submit_date
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbMovieData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*  ---------------
        SHOWS
    --------------- 
*/

// GET the shows page
router.get('/show', async (req, res) => {
  try {
    const dbShowData = await Show.findAll({
      include: [
        {
          model: Idea,
          attributes: ['show_name', 'show_idea'],
        },
      ],
    });

    const show = dbShowData.map((show) =>
      show.get({ plain: true })
    );

    res.render('show', {
      show,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET show
// Use the custom middleware before allowing the user to access the books page
router.get('/show/:id', withAuth, async (req, res) => {
  try {
    const dbShowData = await Show.findByPk(req.params.id, {
      include: [
        {
          model: Idea,
          attributes: [
            'id',
            'show_name',
            'user_name',
            'submit_date',
            'img_name',
            'show_idea',
          ],
        },
      ],
    });

    const show = dbShowData.get({ plain: true });
    res.render('show', { show, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new show idea
router.post('/new_show_idea', async (req, res) => {
  try {
    const dbShowData = await NewShowIdea.create({
      user_name: req.body.user_name,
      show_name: req.body.show_name,
      show_idea: req.body.show_idea,
      submit_date: req.body.submit_date
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbShowData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*  -----------------
        WEBSITES
    -----------------
*/

// GET the websites page
router.get('/website', async (req, res) => {
  try {
    const dbWebsiteData = await Website.findAll({
      include: [
        {
          model: Idea,
          attributes: ['website_name', 'website_idea'],
        },
      ],
    });

    const website = dbWebsiteData.map((website) =>
      website.get({ plain: true })
    );

    res.render('website', {
      website,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET website
// Use the custom middleware before allowing the user to access the books page
router.get('/website/:id', withAuth, async (req, res) => {
  try {
    const dbWebsiteData = await Website.findByPk(req.params.id, {
      include: [
        {
          model: Idea,
          attributes: [
            'id',
            'website_name',
            'user_name',
            'submit_date',
            'img_name',
            'website_idea',
          ],
        },
      ],
    });

    const website = dbWebsiteData.get({ plain: true });
    res.render('website', { website, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new website idea
router.post('/new_website_idea', async (req, res) => {
  try {
    const dbWebsiteData = await NewWebsiteIdea.create({
      user_name: req.body.user_name,
      website_name: req.body.website_name,
      website_idea: req.body.website_idea,
      submit_date: req.body.submit_date
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbWebsiteData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*  --------------
      GET LOGIN
    --------------
*/

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
