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
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const getTotal = () =>
        cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

    const orderSummary = getOrderSummary(cart);

    const handleCheckout = async () => {
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        try {
            // await fetch("http://localhost:7030/api/Send", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         email: email,
            //         cart: orderSummary,
            //         total: getTotal(),
            //     }),
            // });

            setOrderPlaced(true);
            setCart([]);
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            console.error("Error placing order:", error);
            alert("Failed to place order. Please try again.");
        }
    };

    const renderOrderSummaryTable = () => (
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
    );

    if (orderPlaced) {
        return (
            <div className="menu-container checkout-success">
                <h1 className="checkout-menu-title success-title">Order Placed!</h1>
                <p className="success-message">
                    Your order has been placed successfully.<br />
                    Thank you for choosing Sri Sai Delights!
                </p>
                {renderOrderSummaryTable()}
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
                    {renderOrderSummaryTable()}
                    <div className="checkout-form">
                        <input
                            type="email"
                            className="email-input"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="checkout-total">
                            <button className="checkout-button" onClick={handleCheckout}>
                                Place Order
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;