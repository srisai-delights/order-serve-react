import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <div className="support-container">
            <header className="support-header">
                <h1>We're Here to Help</h1>
                <p>If you have any questions or need assistance, reach out to us anytime.</p>
            </header>

            <section className="support-options">
                <div className="support-card">
                    <h3>Email Support</h3>
                    <p>Send us your questions and we'll respond within 24 hours.</p>
                    <a href="mailto:srisaidelightssweden@gmail.com" className="btn">Email Us</a>
                </div>
                <div className="support-card">
                    <h3>Call Support</h3>
                    <p>Talk to our support team directly during business hours.</p>
                    <a href="tel:+46769587768" className="btn">Call Now</a>
                </div>
                <div className="support-card">
                    <h3>FAQs</h3>
                    <p>Find answers to common questions quickly and easily.</p>
                    <a href="/faq" className="btn">Visit FAQs</a>
                </div>
            </section>

            <section className="support-form">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write your message here" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Support;
