import './App.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

function App() {

  const [books, setBooks]= useState([])

  const editBookById = (id, newTitle) => {
    // not preferred as react prefers immutable stuff
    // const bookToUpdate = books.filter(book => book.id === id);
    // bookToUpdate.title = newTitle
    // setBooks(updatedBookList)

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }; // Creating a new object with updated title
      }
      return book;
    });
    setBooks(updatedBooks); // Updating state
  }

  const deleteBookById = (id) => {
    const updatedBookList = books.filter(book => book.id !== id)
    setBooks(updatedBookList)
  }

  const createBook = (title) => {
    const newBook = {title: title,
      id: Math.round(Math.random() * 9999)}
    const updatedBookList = [...books, newBook]
    setBooks(updatedBookList)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
