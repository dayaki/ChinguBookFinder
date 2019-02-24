import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="books">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired
};

export default Books;
