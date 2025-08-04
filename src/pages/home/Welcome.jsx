import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to SriSai Delights</h1>
        <p>Your journey to delicious food starts here.</p>
        <a href="/menu" className="btn">
          Explore Menu
        </a>
      </div>
    </div>
  );
};

export default Welcome;
