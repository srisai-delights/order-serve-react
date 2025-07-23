import React from 'react';
import './css/FoodServices.css';

const Catering = () => {
    return (
        <div className="catering-container">
            <section className="services-section">
                <h2>Our Specialties</h2>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Wedding Packages</h3>
                        <p>Lavish spreads tailored to your dream day.</p>
                    </div>
                    <div className="service-card">
                        <h3>Corporate Events</h3>
                        <p>Professional, timely, and delicious menus.</p>
                    </div>
                    <div className="service-card">
                        <h3>Private Parties</h3>
                        <p>Celebrate with custom menus and premium service.</p>
                    </div>
                    <div className="service-card">
                        <h3>Single Meal Plan</h3>
                        <p>Perfect for one person, choose your meals from our menu and enjoy fresh, homemade dishes.</p>
                    </div>
                    <div className="service-card">
                        <h3>Family Meal Plan</h3>
                        <p>A set of meals designed for family-sized portions, ensuring everyone gets a taste of delicious, home-cooked food.</p>
                    </div>
                    <div className="service-card">
                        <h3>Weekly Meal Plan</h3>
                        <p>Enjoy a week's worth of meals with variety and health-conscious options.</p>
                    </div>
                </div>
            </section>
            <section className="services-section">
                <h2>Dietary Restrictions</h2>
                <p>We understand that everyone has different dietary needs. Thats why we offer meals that cater to various restrictions:</p>
                <div className="service-items">
                    <div className="service-card">
                        <h3>Vegetarian</h3>
                        <p>Lavish spreads tailored to your dream day.</p>
                    </div>
                    <div className="service-card">
                        <h3>Vegan</h3>
                        <p>Professional, timely, and delicious menus.</p>
                    </div>
                    <div className="service-card">
                        <h3>Gluten-Free</h3>
                        <p>Celebrate with custom menus and premium service.</p>
                    </div>
                    <div className="service-card">
                        <h3>Low-Carb</h3>
                        <p>Low-Carb.</p>
                    </div>
                    <div className="service-card">
                        <h3>Halal</h3>
                        <p>Halal.</p>
                    </div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <p>Let us know your preferences, and we'll customize meals accordingly!</p>
                </div>
            </section>
        </div>
    );
};

export default Catering;
