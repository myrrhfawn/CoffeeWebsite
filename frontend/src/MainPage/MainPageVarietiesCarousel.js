import React from "react";
import {VarietiesCarousel} from "./MainCarousel/VarietiesCarousel.js"
import {CarouselItem} from "./MainCarousel/CarouselItem.js"
import "./MainPageVarietiesCarousel.css"


function MainPageVarietiesCarousel() {  

    return(
        <div className="main_content">
            <div className="carousel-container">
                <VarietiesCarousel>
                    <div className="item item-1">Item1</div>
                    <div className="item item-2">Item2</div>
                    <div className="item item-3">Item3</div>
                    <div className="item item-4">Item4</div>
                    <div className="item item-5">Item5</div>
                    <div className="item item-5">Item5</div>
                </VarietiesCarousel>
            </div>
        </div>
    )
}

export default MainPageVarietiesCarousel;