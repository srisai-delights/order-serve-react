import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        comments: "",
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
        console.log("Feedback submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="feedback-container">
            <h2>Give Us Your Feedback</h2>
            <p>We value your feedback to improve our food and service experience!</p>

            {submitted ? (
                <div className="thank-you">
                    <h3>Thank You!</h3>
                    <p>Your feedback has been received.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="feedback-form">
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
                        Rating:
                        <select
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="5">⭐️⭐️⭐️⭐️⭐️ Excellent</option>
                            <option value="4">⭐️⭐️⭐️⭐️ Good</option>
                            <option value="3">⭐️⭐️⭐️ Average</option>
                            <option value="2">⭐️⭐️ Poor</option>
                            <option value="1">⭐️ Very Poor</option>
                        </select>
                    </label>
                    <label>
                        Comments:
                        <textarea
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
    );
};

export default Feedback;
