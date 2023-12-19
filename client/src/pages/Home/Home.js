import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to join Yoga Classes</h1>

        <Link to="/application-form">
          <button className="styled-button">Fill the application</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
