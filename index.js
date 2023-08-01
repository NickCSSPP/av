const express = require('express');
const app = express();

app.use(express.json());

// Array for Book Database
const books = [{
    id: 1,
    book: 'The Great Gatsby'
},
{
    id: 2,
    book: '1984'
},
{
    id: 3,
    book: 'Pride and Prejudice'
},
{
    id: 4,
    book: 'The Hobbit'
},
{
    id: 5,
    book: 'The Lord of the Rings: The Fellowship of the Ring'
},
{
    id: 6,
    book: 'Brave New World'
},
{
    id: 7,
    book: 'The Metamorphosis'
},
{
    id: 8,
    book: 'Do Androids Dream of Electric Sheep?'
},
{
    id: 9,
    book: 'Faust'
},
{
    id: 10,
    book: 'The Odyssey'
}];

// Get all books
app.get('/api/books', (req, res)=> {
    res.send(books);
});

//post
app.post('/api/books', (req, res)=> {
    const mybook = {
        id: books.length + 1,
        book: req.body.book
    }

    books.push(mybook);
    res.send(mybook);
})

//put
app.put('/api/books/:id', (req, res)=> {
    const mybook = books.find(t => t.id === parseInt(req.params.id));
    if (!mybook) return res.status(404).send('The book with this ID was not found');

    mybook.book = req.body.book;
    res.send(mybook);
});

//delete
app.delete('/api/books/:id', (req, res)=> {
    const mybook = books.find(t => t.id === parseInt(req.params.id));
    if (!mybook) return res.status(404).send('The book with this ID was not found');

    const index = books.indexOf(mybook);
    books.splice(index, 1);
    res.send(mybook);
});


// Configuration
const port = process.env.port || 6001;
app.listen(port,()=> console.log('Listening on port ${port}'));