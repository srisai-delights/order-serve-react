import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle form data (API call or email service)
        console.log("Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Whether it’s feedback, questions, or a special request, drop us a message.</p>

            {submitted ? (
                <div className="thank-you">
                    <h3>Thank you!</h3>
                    <p>Your message has been sent. We’ll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default ContactUs;
