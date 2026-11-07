
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Books({ books, onAddToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Crime",
    "Fantasy",
    "Romance",
    "Adventure",
    "Classic"
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      `${book.title} ${book.author}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="books-page">
      <div className="books-page-heading">
        <p>EXPLORE OUR COLLECTION</p>
        <h1>Our Books</h1>
        <span>Find the story that speaks to you.</span>
      </div>

      <input
        className="search-input"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "selected-category" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <Link to={`/books/${book.id}`}>
                <div className="book-cover">
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
              </Link>

              <div className="book-info">
                <p className="book-category">{book.category}</p>
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-price">
                  ${book.price.toFixed(2)}
                </p>

                <button
                  className="add-button"
                  onClick={() => onAddToCart(book)}
                >
                  Add to Cart
                </button>

                <Link
                  to={`/books/${book.id}`}
                  className="details-link"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-books">No books found.</p>
        )}
      </div>
    </section>
  );
}

export default Books;
