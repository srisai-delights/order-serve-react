import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "..//pages/menu/Menu.css";
import "./Checkout.css";

const getOrderSummary = (cart) => {
    const summary = {};
    cart.forEach(item => {
        if (!summary[item.id]) {
            summary[item.id] = { ...item, quantity: 1 };
        } else {
            summary[item.id].quantity += 1;
        }
    });
    return Object.values(summary);
};

const Checkout = ({ cart, setCart }) => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const getTotal = () =>
        cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

    const orderSummary = getOrderSummary(cart);

    const handleCheckout = () => {
        setOrderPlaced(true);
        setCart([]);
        setTimeout(() => navigate("/"), 2000);
    };

    if (orderPlaced) {
        return (
            <div className="menu-container checkout-success">
                <h1 className="checkout-menu-title success-title">Order Placed!</h1>
                <p className="success-message">
                    Your order has been placed successfully.<br />
                    Thank you for choosing Sri Sai Delights!
                </p>
                <div className="summary-container">
                    <h2 className="summary-heading">Order Summary</h2>
                    <table className="summary-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderSummary.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.image} alt={item.name} className="summary-image" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td className="center">{item.quantity}</td>
                                    <td className="right">₹{item.price}</td>
                                    <td className="right">₹{(item.quantity * parseFloat(item.price)).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5} className="right bold">Total</td>
                                <td className="right bold">₹{getTotal()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div className="menu-container">
            <h1 className="checkout-menu-title">Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="menu-grid">
                        {cart.map((item, idx) => (
                            <div key={idx} className="menu-tile">
                                <div className="image-container">
                                    <img src={item.image} alt={item.name} className="tile-image" />
                                </div>
                                <div className="overlay-text">
                                    <h3 className="tile-title">{item.name}</h3>
                                    <p className="tile-description">{item.description}</p>
                                    <p className="tile-price">₹{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout-total">
                        <h2>Total: ₹{getTotal()}</h2>
                        <button className="checkout-button" onClick={handleCheckout}>
                            Place Order
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
