import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const [email, setEmail] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const increaseQuantity = (item) => {
    setCart((prev) =>
      prev.map((ci) =>
        ci.id === item.id && ci.quantity < 10
          ? { ...ci, quantity: ci.quantity + 1 }
          : ci
      )
    );
  };

  const decreaseQuantity = (item) => {
    setCart((prev) =>
      prev.map((ci) =>
        ci.id === item.id && ci.quantity > 1
          ? { ...ci, quantity: ci.quantity - 1 }
          : ci
      )
    );
  };

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((ci) => ci.id !== item.id));
  };

  const getTotalAmount = () =>
    cart
      .reduce(
        (sum, item) => sum + item.quantity * parseFloat(item.price || 0),
        0
      )
      .toFixed(2);

  const getTotalQuantity = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Uncomment this for live API integration
      // await fetch("http://localhost:7030/api/Send", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //         email: email,
      //         cart: cart,
      //         total: getTotal(),
      //     }),
      // });

      setOrderPlaced(true);
      setTimeout(() => navigate("/"), 2000);
      setCart([]);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="checkout-wrapper">
      <h1 className="checkout-title">
        {orderPlaced ? "Order Placed!" : "Checkout"}
      </h1>

      {orderPlaced ? (
        <p className="checkout-success-message">
          Thank you for your order!
          <br />A confirmation has been sent to your email.
        </p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty.</p>
          ) : (
            <div className="checkout-card">
              <div className="checkout-table-container">
                <h2 className="checkout-heading">Order Summary</h2>
                <table className="checkout-table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left" }}>Item</th>
                      <th style={{ textAlign: "left" }}>Description</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td style={{ textAlign: "center" }}>
                          <div className="qty-controls">
                            <button
                              onClick={() => decreaseQuantity(item)}
                              disabled={item.quantity <= 1}
                            >
                              −
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => increaseQuantity(item)}
                              disabled={item.quantity >= 10}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>₹{item.price}</td>
                        <td style={{ textAlign: "center" }}>
                          ₹
                          {(
                            item.quantity * parseFloat(item.price || 0)
                          ).toFixed(2)}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <button
                            className="delete-button"
                            onClick={() => removeFromCart(item)}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2" className="total-label">
                        Total
                      </td>
                      <td colSpan="1" className="total-value">
                        {getTotalQuantity()}
                      </td>
                      <td colSpan="1" className="total-value" />

                      <td
                        colSpan="1"
                        className="total-value"
                        style={{ textAlign: "center" }}
                      >
                        ₹{getTotalAmount()}
                      </td>
                      <td colSpan="1" className="total-value" />
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="checkout-actions">
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="checkout-button" onClick={handleCheckout}>
                  Place Order
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
