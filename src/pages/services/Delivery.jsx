import React from 'react';
import './css/FoodServices.css';
import './css/Services.css';
import { Link } from 'react-router-dom';


const Delivery = () => {
    return (
        <div className="catering-container">
            <header className="hero">
                <h1>Fast & Fresh Food Delivery</h1>
                <p>Your favorite meals, delivered to your doorstep.</p>
                <Link to="/menu" className="btn">Order Now</Link>
            </header>
            <section className="services-section">
                <h2>Popular Categories & Delivery Options</h2>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Biryani & Rice</h3>
                        <p>Flavor-packed biryanis with rich spices and sides.</p>
                    </div>
                    <div className="service-card">
                        <h3>South Indian</h3>
                        <p>Dosa, Idli, Vada and authentic sambar varieties.</p>
                    </div>
                    <div className="service-card">
                        <h3>North Indian</h3>
                        <p>Paneer, roti, butter chicken, dal makhani & more.</p>
                    </div>
                    <div className="service-card">
                        <h3>Same-Day Delivery</h3>
                        <p>Get your meals delivered the same day you place the order.</p>
                    </div>
                    <div className="service-card">
                        <h3>Next-Day Delivery</h3>
                        <p>Convenient delivery for those who plan ahead.</p>
                    </div>
                    <div className="service-card">
                        <h3>Scheduled Delivery</h3>
                        <p>Schedule meals to arrive on a specific day and time.</p>
                    </div>
                    <p>We make meal delivery fast and convenient. Choose the delivery option that best suits your schedule:</p>
                </div>
            </section>
            <section className="contact-section" id="order">
                <h2>Place Your Order</h2>
                <p>Call us or order online now. Hot food, fast delivery!</p>
                <a href="tel:+46 769587768" className="btn">Call Now</a>
            </section>
        </div>
    );
};

export default Delivery;
