import React from "react";

function About() {
  return (
    <section className="page-section about-page">
      <p className="section-label">OUR STORY</p>

      <h1>About Book Bloom</h1>

      <p className="page-description">
        Book Bloom is an online bookstore created for people
        who love reading and discovering new stories.
      </p>

      <div className="about-content">
        <div className="about-decoration">✿</div>

        <div>
          <h2>Our Mission</h2>

          <p>
            Our mission is to make discovering and purchasing
            books simple, enjoyable, and accessible to everyone.
            We believe that every book has a story waiting to
            be discovered.
          </p>

          <h2>Our Vision</h2>

          <p>
            We aim to create a welcoming online space where
            readers can explore different genres, discover
            wonderful authors, and find books that inspire them.
          </p>

          <h2>Why Book Bloom?</h2>

          <p>
            We bring together a carefully selected collection
            of books in one beautiful and easy-to-use online store.
            Every page is designed to make your reading journey
            more enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;