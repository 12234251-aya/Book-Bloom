
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="library-hero">
        <img
          className="hero-library-image"
          src="https://images.pexels.com/photos/37041175/pexels-photo-37041175.jpeg"
          alt="The famous Starfield Library in Seoul"
        />

        <div className="hero-overlay">
          <p>WELCOME TO BOOK BLOOM</p>

          <h1>
            Every Book Opens
            <br />
            A New World
          </h1>

          <p className="hero-description">
            Discover your next favorite story in our
            beautiful world of books.
          </p>

          <Link to="/books" className="primary-button">
            Explore Our Books
          </Link>
        </div>
      </section>

      <section className="library-intro">
        <p className="section-label">A PLACE FOR EVERY READER</p>

        <h2>More Than Just a Bookstore</h2>

        <p>
          Book Bloom is a place where stories come alive.
          Explore different genres, discover new authors,
          and enjoy the magic of reading.
        </p>
      </section>

      <section className="library-gallery">

        <div className="gallery-card">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Library_in_Seoul_%2853608020746%29.jpg/960px-Library_in_Seoul_%2853608020746%29.jpg"
            alt="Starfield Library interior"
          />
          <h3>Explore Our Library</h3>
        </div>

        <div className="gallery-card">
          <img
            src="https://static.wixstatic.com/media/3cb903_23027fb5296d4672bb0588083e19d496~mv2.jpg/v1/fill/w_491%2Ch_491%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/3cb903_23027fb5296d4672bb0588083e19d496~mv2.jpg"
            alt="Library tables and chairs surrounded by bookshelves"
          />
          <h3>Enjoy Every Reading Moment</h3>
        </div>

        <div className="gallery-card">
          <img
            src="https://www.jenkintownlibrary.org/sites/default/files/2019-01/IMG_2272.jpg"
            alt="A quiet reading corner with a table, chairs and bookshelves"
          />
          <h3>Find Your Quiet Corner</h3>
        </div>

      </section>

      <section className="home-discover">
        <h2>Ready for Your Next Adventure?</h2>

        <p>
          From mystery and crime to romance and fantasy,
          there is a story waiting for you.
        </p>

        <Link to="/books" className="primary-button">
          Browse All Books
        </Link>
      </section>

    </div>
  );
}

export default Home;
