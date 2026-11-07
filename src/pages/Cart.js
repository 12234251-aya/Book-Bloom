import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, onUpdateQuantity, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="page-section cart-page">
      <p className="section-label">YOUR SELECTION</p>

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div>♡</div>

          <h2>Your cart is empty</h2>

          <p>Discover a book and add it to your collection.</p>

          <Link to="/Books" className="primary-button">
            Explore Books
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.cover} alt={item.title} />

                <div className="cart-item-info">
                  <h3>{item.title}</h3>

                  <p>{item.author}</p>

                  <p>${item.price.toFixed(2)}</p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>

            <button
              className="primary-button"
              onClick={() =>
                alert("Thank you for choosing Book Bloom!")
              }
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;