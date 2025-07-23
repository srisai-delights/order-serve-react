import React from 'react';
import './css/FoodServices.css';
import { Link } from 'react-router-dom';


const Takeaway = () => {
    return (
        <div className="catering-container">
            <header className="hero">
                <h1>Takeaway Orders</h1>
                <p>Order ahead and skip the wait – pickup made easy.</p>
                <Link to="/menu" className="btn">Order for Pickup </Link>
            </header>

            <section className="services-section">
                <h2>Why Choose Takeaway?</h2>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Fast Service</h3>
                        <p>Your order is ready in 15 minutes or less.</p>
                    </div>
                    <div className="service-card">
                        <h3>Hot & Fresh</h3>
                        <p>We prepare your meal just before your arrival.</p>
                    </div>
                    <div className="service-card">
                        <h3>Discounts</h3>
                        <p>Enjoy exclusive takeaway-only deals.</p>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <h2>Pickup Instructions</h2>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Place Your Order</h3>
                        <p>Call us or order online with your preferred time.</p>
                    </div>
                    <div className="service-card">
                        <h3>Get Confirmation</h3>
                        <p>We’ll confirm your pickup slot instantly.</p>
                    </div>
                    <div className="service-card">
                        <h3>Collect & Enjoy</h3>
                        <p>Visit our counter and grab your fresh meal!</p>
                    </div>
                </div>
            </section>

            <section className="contact-section" id="pickup">
                <h2>Ready to Order?</h2>
                <p>Call us to place your takeaway order now!</p>
                <a href="tel:+46 769587768" className="btn">Call for Pickup</a>
            </section>
        </div>
    );
};

export default Takeaway;
