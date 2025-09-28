import { useState } from "react";
import Gallery from "./imageLibrary";
import "./ImageCarousel.css"


    const images = Gallery();


function Carousel(){
    const [currentIndex, setIndex] = useState(0)
    function goToPrevious(){
        setIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    }
    function goToNext(){
        setIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
    }


    return (
        <div className="carousel">
        {/* Left arrow in the carousel */}
            <div className="left-arrow">
                <button onClick={goToPrevious}>&#10094;</button>
            </div>
        {/* Image carousel, holds images */}
            <div className="image-container">
                <img src={images[currentIndex]} alt="carousel image"/>
            </div>

        {/* Right arrow in the carousel */}
            <div className="right-arrow">
                <button onClick={goToNext}>&#10095;</button>
            </div>
        
        </div>
    )
}

export default Carousel;