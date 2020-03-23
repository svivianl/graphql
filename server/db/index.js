const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = max ? Math.floor(max) : 0;
    return max ? (Math.floor(Math.random() * (max - min)) + min) : (Math.floor(Math.random() * Math.floor(min)));
}

// fake data
const fakeAuthors = (numberOfAuthors) => {
    const authors = [];

    for(let i = 0; i < numberOfAuthors; i++){
        authors.push({
            id: i,
            name: `Author ${i}`,
            age: getRandomInt(20, 90)
        })
    }

    return authors;
}
const genres = ['Fantasy', 'Sci-Fi', 'Drama']
const fakeBooks = (numberOfBooks, numberOfAuthors) => {
    const books = [];

    for(let i = 0; i < numberOfBooks; i++){
        books.push({
            id: i,
            name: `Book ${i}`,
            genre: genres[getRandomInt(3)],
            authorId: getRandomInt(numberOfAuthors)
        })
    }

    return books;
}

const Authors = fakeAuthors(10);
const Books = fakeBooks(5, 10);
// console.log("Authors", Authors)
// console.log("Books", Books)

module.exports = { Books, Authors }