import React from "react";
import './homePage.css'
import fhseagle from "../Assets/fhseagle.png";

function HomePage() {
  return (
    <>
      <div className="homeTitle">
        <img src={fhseagle} alt="FHS Eagle Logo" className="eagleLogo"/>
        <div className="text-container">
          <h1 className="title">Freeman Highschool Key Club</h1>
          <h2 className="subheadingTitle">Volunteering Club of Texas Oaklahoma Keyclub Divison 3W</h2>
        </div>
      </div>
      <div className="aboutSection">
          <button className="aboutButton">About Us!</button>
      </div>
    </>
  );
}

export default HomePage;