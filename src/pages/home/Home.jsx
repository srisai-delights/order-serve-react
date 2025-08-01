import React from "react";
import "./Home.css";
import Welcome from "./Welcome";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Features />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
