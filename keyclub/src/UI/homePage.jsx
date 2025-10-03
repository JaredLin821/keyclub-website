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
          <h2 className="subheadingTitle">"Caring- our way of life"</h2>
        </div>
      </div>
      <div className="aboutSection">
          <button className="aboutButton">About Us!</button>
      </div>
      <div className="Social-Media">
        <h1 className="Social-Tag">Our Social Media!</h1>
        <h1 className="Social-Tag-2">Follow us onInstagram @freemankeyclub<br /> to be notified about upcoming events!</h1>
        <div></div>
      </div>
    </>
  );
}

export default HomePage;