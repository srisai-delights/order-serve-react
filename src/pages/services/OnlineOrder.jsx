import React from 'react';
import './css/FoodServices.css';
import { Link } from 'react-router-dom';

const OnlineOrder = () => {
    return (
        <div className="catering-container">
            <header className="hero">
                <h1>Order Online</h1>
                <p>Fresh food at your fingertips order anytime, anywhere.</p>
                <Link to="/menu" className="btn">Browse Menu</Link>
            </header>

            <section className="services-section" id="menu">
                <h2>Featured Dishes</h2>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Chicken Biryani</h3>
                        <p>Spiced rice with tender chicken and herbs.</p>
                    </div>
                    <div className="service-card">
                        <h3>Masala Dosa</h3>
                        <p>Golden crispy dosa with spiced potato filling.</p>
                    </div>
                    <div className="service-card">
                        <h3>Butter Paneer</h3>
                        <p>Creamy North Indian paneer curry with naan.</p>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <h2>How to Order</h2>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Select Dishes</h3>
                        <p>Browse and add your favorites to the cart.</p>
                    </div>
                    <div className="service-card">
                        <h3>Checkout</h3>
                        <p>Choose delivery or pickup, and pay securely.</p>
                    </div>
                    <div className="service-card">
                        <h3>Track Order</h3>
                        <p>Get real-time updates from our kitchen to your door.</p>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <h2>Start Ordering Now</h2>
                <p>Click below to visit our online ordering system.</p>
                <Link to="/menu" className="btn">
                    Go to Online Menu
                </Link>
            </section>

        </div>
    );
};

export default OnlineOrder;
