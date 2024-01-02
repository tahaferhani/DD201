import { useEffect, useState } from 'react';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import switchImage from "./img/image.jpg"

function App() {
  const [books, setBooks] = useState(null);
  const [book, setBook] = useState({
    title: "",
    price: "",
    active: false
  });
  const [updateIndex, setUpdateIndex] = useState(null);

  useEffect(() => {
    let books = localStorage.getItem("books");
    books = JSON.parse(books);
    setBooks(books);
  }, [])

  useEffect(() => {
    if (!books)
      return;
    
    localStorage.setItem("books", JSON.stringify(books));
  }, [books])

  const addBook = () => {
    if (updateIndex == null) {
      setBooks([
        ...(books || []),
        book
      ]);
    }
    else {
      const newBooks = [...books];
      newBooks[updateIndex] = book;
      setBooks(newBooks);
      setUpdateIndex(null);
    }

    setBook({
      title: "",
      price: "",
      active: false
    });
  }
  
  const updateBook = (book, index) => {
    setBook(book);
    setUpdateIndex(index);
  }

  const deleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  }

  return (
    <div className="App">
      <img width={100} src={require("./img/image.jpg")}/>
      <img width={100} src={switchImage}/>

      <BookForm
        book={book}
        setBook={setBook}
        addBook={addBook}
        updateIndex={updateIndex}/>

      <BookList books={books} updateBook={updateBook} deleteBook={deleteBook}/>
    </div>
  );
}

export default App;
