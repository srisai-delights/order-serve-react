import React from 'react';
import './OurStory.css';

const OurStory = () => {
    return (
        <div className="ourstory-container">
            <header className="ourstory-header">
                <h1>Our Story</h1>
                <p>From humble beginnings to your favorite food delivery.</p>
            </header>

            <section className="ourstory-content">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                    alt="Founders cooking"
                    className="ourstory-image"
                />
                <div className="ourstory-text">
                    <h2>Passion for Food, Commitment to Quality</h2>
                    <p>
                        Founded in 2025, SriSai Delights started as a small home kitchen with a
                        big dream: to bring authentic, delicious food to everyone’s doorstep.
                        Over the years, our dedication to quality ingredients and
                        exceptional service has helped us grow into a trusted name in
                        food delivery and takeaway.
                    </p>
                    <p>
                        Our talented chefs blend traditional recipes with modern flavors to
                        create meals that comfort and delight. We believe that food is
                        more than just nourishment — it’s about connection, culture, and
                        celebration.
                    </p>
                    <p>
                        Thank you for being a part of our journey. We look forward to
                        serving you fresh, flavorful meals for many years to come.
                    </p>
                </div>
            </section>

            <section className="ourstory-values">
                <h2>Our Core Values</h2>
                <ul>
                    <li>🧡 Quality Ingredients</li>
                    <li>⏱️ Timely Delivery</li>
                    <li>🌱 Sustainability & Local Sourcing</li>
                    <li>👩‍🍳 Passionate Culinary Team</li>
                    <li>🤝 Customer Satisfaction</li>
                </ul>
            </section>
        </div>
    );
};

export default OurStory;