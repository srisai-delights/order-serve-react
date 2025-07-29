import React from "react";
import './Contact.css'
import ContactUs from "./ContactUs";
import Feedback from "./Feedback";
import Support from "./Support";


const Contact = () => {
    return (
        <div>
            <Support />
            <div className="contact-row">
                <ContactUs />
                <Feedback />
            </div>
        </div>
    );
};

export default Contact;
