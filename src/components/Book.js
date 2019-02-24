import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const imageLinkText = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.smallThumbnail
    : "http://books.google.com/books/content?id=weziqmesADQC&printsec=frontcover&img=1&zoom=1&source=gbs_api";
  return (
    <div className="book">
      <div className="img">
        <img src={imageLinkText} alt={book.volumeInfo.title} />
      </div>
      <div className="info">
        <h3>{book.volumeInfo.title}</h3>
        <p>By: {book.volumeInfo.authors}</p>
        <p>Published by: {book.volumeInfo.publisher}</p>
        <a
          href={book.volumeInfo.infoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          See this book
        </a>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
