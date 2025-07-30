
import React from "react";
import './About.css'
import OurMission from "./OurMission";
import OurStory from "./OurStory";

const About = () => {
    return (
        <div className="about-us">
            <OurMission />
            <OurStory />
            <section className="why-us">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Homemade meals made with fresh, high-quality ingredients.</li>
                    <li>Convenient delivery to your doorstep, ensuring meals are served fresh.</li>
                    <li>Meals tailored to various dietary preferences, including vegetarian and gluten-free options.</li>
                    <li>A commitment to supporting local farmers and suppliers.</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
