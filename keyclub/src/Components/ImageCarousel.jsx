import { useState } from "react";

    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
        "https://via.placeholder.com/600x400?text=Image+2",
        "https://via.placeholder.com/600x400?text=Image+3"
    ];


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