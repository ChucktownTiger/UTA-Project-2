const websiteIdeaFormHandler = async (event) => {
    event.preventDefault();

    const website_name = document.querySelector('#website_name').value.trim();
    const website_idea = document.querySelector('#website-idea').value.trim();
    const username = document.querySelector('#username').value.trim();
    const submit_date = moment().format("MMMM DD YYYY, hh:mm:ss");

    if (username && website_idea && website_name) {
    const response = await fetch('/api/website/', {
        method: 'POST',
        body: JSON.stringify({ username, website_name, website_idea, submit_date }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/book');
    } else {
        alert('Failed to create Idea.');
    }
    }
};

const tvshowIdeaFormHandler = async (event) => {
    event.preventDefault();

    const tvshow_name = document.querySelector('#tvshow_name').value.trim();
    const tvshow_idea = document.querySelector('#tvshow-idea').value.trim();
    const username = document.querySelector('#username').value.trim();
    const submit_date = moment().format("MMMM DD YYYY, hh:mm:ss");

    if (username && show_idea && show_name) {
    const response = await fetch('/api/tvshow/', {
        method: 'POST',
        body: JSON.stringify({ username, tvshow_name, tvshow_idea, submit_date }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/tvshow');
    } else {
        alert('Failed to create Idea.');
    }
    }
};

const movieIdeaFormHandler = async (event) => {
    event.preventDefault();

    const movie_name = document.querySelector('#movie_name').value.trim();
    const movie_idea = document.querySelector('#movie-idea').value.trim();
    const username = document.querySelector('#username').value.trim();
    const submit_date = moment().format("MMMM DD YYYY, hh:mm:ss");

    if (username && movie_idea && movie_name) {
        const response = await fetch('/api/movie/', {
        method: 'POST',
        body: JSON.stringify({ username, movie_name, movie_idea, submit_date }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/movie');
    } else {
        alert('Failed to create Idea.');
    }
    }
};
const bookIdeaFormHandler = async (event) => {
    event.preventDefault();

    const book_name = document.querySelector('#book_name').value.trim();
    const book_idea = document.querySelector('#book-idea').value.trim();
    const username = document.querySelector('#username').value.trim();
    const submit_date = moment().format("MMMM DD YYYY, hh:mm:ss");

    if (username && book_idea && book_name) {
        const response = await fetch('/api/book/', {
        method: 'POST',
        body: JSON.stringify({ username, book_name, book_idea, book_date }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/book');
    } else {
        alert('Failed to create Idea.');
    }
    }
};


document
    .querySelector('.new-website-idea')
    .addEventListener('submit', websiteIdeaFormHandler);
document
    .querySelector('.new-show-idea')
    .addEventListener('submit', showIdeaFormHandler);
document
    .querySelector('.new-movie-idea')
    .addEventListener('submit', movieIdeaFormHandler);
document
    .querySelector('.new-book-idea')
    .addEventListener('submit', bookIdeaFormHandler);
