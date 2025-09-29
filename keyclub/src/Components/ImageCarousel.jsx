import { useState } from "react";
import Gallery from "./imageLibrary";
import "./ImageCarousel.css"


const images = Gallery();


function Carousel(){
    const [currentIndex, setIndex] = useState(0);
    const imagesPerPage = 4; // Number of images to display at once
    
    function goToPrevious(){
        setIndex((prev) => 
            prev === 0 ? Math.max(0, images.length - 1) : Math.max(0, prev - 1)
        );
    }
    
    function goToNext(){
        setIndex((prev) => 
            prev + 1 >= images.length ? 0 : prev + 1
        );
    }


    return (
        <div className="carousel">
        {/* Left arrow in the carousel */}
            <div className="left-arrow">
                <button onClick={goToPrevious}>&#10094;</button>
            </div>
        {/* Image carousel, holds images */}
            <div className="image-container">
                {[...Array(imagesPerPage)].map((_, i) => {
                    const imageIndex = currentIndex + i;
                    // Only render if we have an image at this index
                    return imageIndex < images.length ? (
                        <div className="carousel-image" key={imageIndex}>
                            <img 
                                src={images[imageIndex]} 
                                alt={`carousel image ${imageIndex + 1}`}
                            />
                        </div>
                    ) : null;
                })}
            </div>

        {/* Right arrow in the carousel */}
            <div className="right-arrow">
                <button onClick={goToNext}>&#10095;</button>
            </div>
        
        </div>
    )
}

export default Carousel;