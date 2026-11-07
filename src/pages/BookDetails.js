
import React from "react";
import { Link, useParams } from "react-router-dom";

function BookDetails({ books, onAddToCart }) {
  const { id } = useParams();

  const book = books.find(
    (item) => item.id === Number(id)
  );

  if (!book) {
    return (
      <section className="page-section">
        <h1>Book Not Found</h1>
        <Link to="/books">Back to Books</Link>
      </section>
    );
  }

  return (
    <section className="book-details-page">

      <div className="details-cover">
        <img
          src={book.cover}
          alt={book.title}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add(
              "missing-cover"
            );
          }}
        />
        <span className="cover-fallback">
          {book.title}
        </span>
      </div>

      <div className="details-info">

        <p className="section-label">
          {book.category}
        </p>

        <h1>{book.title}</h1>

        <p className="details-author">
          By {book.author}
        </p>

        <h3>About This Book</h3>

        <p className="details-description">
          {book.description}
        </p>

        <h2 className="details-price">
          ${book.price.toFixed(2)}
        </h2>

        <button
          className="primary-button"
          onClick={() => onAddToCart(book)}
        >
          Add to Cart
        </button>

        <br />

        <Link to="/books" className="text-link">
          ← Back to Books
        </Link>

      </div>
    </section>
  );
}

export default BookDetails;
