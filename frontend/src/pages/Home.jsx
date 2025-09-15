import React from "react";
import leftImage from "../assets/left-image.jpg";
import rightImage from "../assets/right-image.jpg";
import "../App.css";



const Home = () => (
  <div className="home-flex-layout">
    <div className="left-section">
      <div className="left-image">
        <img src={leftImage} alt="Left Side" />
      </div>
    </div>
    <div className="center-section">
      <h1>Parker Hendrix</h1>
      <div className="titleContainer">
        <p>
          Full-stack developer and BYU Information Systems student <br />
          turning ideas into efficient, reliable software
        </p>
      </div>
    </div>
    <div className="right-section">
      <div className="right-image">
        <img src={rightImage} alt="Right Side" />
      </div>
    </div>
  </div>
);

export default Home;
