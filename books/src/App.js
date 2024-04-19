import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'

function App() {

  const [books, setBooks]= useState([])

  const fetchBooks = async() => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(() => {fetchBooks()}, []);

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    // not preferred as react prefers immutable stuff
    // const bookToUpdate = books.filter(book => book.id === id);
    // bookToUpdate.title = newTitle
    // setBooks(updatedBookList)
    
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; // Creating a new object with updated title
      }
      return book;
    });
    setBooks(updatedBooks); // Updating state
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBookList = books.filter(book => book.id !== id)
    setBooks(updatedBookList)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
