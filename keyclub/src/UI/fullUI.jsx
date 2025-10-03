import React from "react";
import NavBar from "./navBar";
import HomePage from "./homePage";
import ImageCarousel from "../Components/ImageCarousel";

const FullUI = () => {
  return (
    <div>
      <NavBar />
      <ImageCarousel />
      
      <HomePage />
    </div>
  );
}

export default FullUI;