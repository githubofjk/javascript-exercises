const getTheTitles = function(books) {
    let titles = [];
    books.forEach((book, i) => titles[i] = book.title);
    return titles;
}

module.exports = getTheTitles;