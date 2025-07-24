import React from "react";
import './css/Services.css'
import Catering from "./Catering";
import Delivery from "./Delivery";
import OnlineOrder from "./OnlineOrder";
import Takeaway from "./Takeaway";


const Services = () => {
    return (
        <div className="services-page">
            <header className="catering-hero">
                <h1>Our Catering Services</h1>
                <p>Discover the range of services we offer to make your meal experience delightful and convenient.</p>
                <a href="#contact" className="btn">Book Now</a>
            </header>
            <Catering />
            <Delivery />
            <OnlineOrder />
            <Takeaway />
            <section className="custom-orders">
                <h2>Custom Orders</h2>
                <p>Have specific requests or need something tailored to your taste? We offer custom meal preparation for unique events like parties, gatherings, or corporate lunches. Get in touch to discuss your needs!</p>
            </section>
        </div>
    );
};

export default Services;
