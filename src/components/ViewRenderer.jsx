import React from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import Features from "../pages/home/Features";
import Gallery from "../pages/home/Gallery";
import Testimonials from "../pages/home/Testimonials";
import Welcome from "../pages/home/Welcome";

import Menu from "../pages/menu/Menu";
import Biryani from "../pages/menu/Biryani";
import Curries from "../pages/menu/Curries";
import Desserts from "../pages/menu/Desserts";
import Snacks from "../pages/menu/Snacks";
import Tandoori from "../pages/menu/Tandoori";
import Beverages from "../pages/menu/Beverages";

import Services from "../pages/services/Services";
import Catering from "../pages/services/Catering";
import Takeaway from "../pages/services/Takeaway";
import Delivery from "../pages/services/Delivery";
import OnlineOrder from "../pages/services/OnlineOrder";

import About from "../pages/about/About";
import OurMission from "../pages/about/OurMission";
import OurStory from "../pages/about/OurStory";


import Contact from "../pages/contact/Contact";
import ContactUs from "../pages/contact/ContactUs";
import Feedback from "../pages/contact/Feedback";
import Support from "../pages/contact/Support"

function ViewRenderer({ cart, setCart }) {
    const location = useLocation();
    const path = location.pathname.toLowerCase();
    console.log("Current path:", path);

    switch (path) {
        case "/":
             return <Home />;
        case "/home":
            return <Home />;
        case "/home/features":
            return <Features />;
        case "/home/gallery":
            return <Gallery />;
        case "/home/testimonials":
            return <Testimonials />;
        case "/home/welcome":
            return <Welcome />;


        case "/menu":
            return <Menu  cart={cart} setCart={setCart}/>;
        case "/menu/biryani":
            return <Biryani cart={cart} setCart={setCart} />;
        case "/menu/beverages":
            return <Beverages cart={cart} setCart={setCart} />;
        case "/menu/curries":
            return <Curries cart={cart} setCart={setCart} />;
        case "/menu/desserts":
            return <Desserts cart={cart} setCart={setCart} />;
        case "/menu/snacks":
            return <Snacks cart={cart} setCart={setCart} />;
        case "/menu/tandoori":
            return <Tandoori cart={cart} setCart={setCart} />;

        case "/services":
            return <Services />;
        case "/services/catering":
            return <Catering cart={cart} setCart={setCart} />;
        case "/services/takeaway":
            return <Takeaway cart={cart} setCart={setCart} />;
        case "/services/delivery":
            return <Delivery cart={cart} setCart={setCart} />;
        case "/services/online-ordering":
            return <OnlineOrder cart={cart} setCart={setCart} />;

        case "/about":
            return <About />;
        case "/about/our-mission":
            return <OurMission />;
        case "/about/our-story":
            return <OurStory />;

        case "/contact":
            return <Contact />;
        case "/contact/contact-us":
            return <ContactUs />;
        case "/contact/feedback":
            return <Feedback />;
        case "/contact/support":
            return <Support />;
        default:
            return <h2 style={{ padding: "20px" }}>404 - Page Not Found</h2>;
    }
}

export default ViewRenderer;
