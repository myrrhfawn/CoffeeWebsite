import React from "react";
import axios from "axios";
import {MainCarousel} from "./MainCarousel/MainCarousel.js"
import {CarouselItem} from "./MainCarousel/CarouselItem.js"
import "./MainPageContent.css"

export default function MainPageContent(props) {  
    
    return(
        <div className="main_content">
            <div className="carousel-container">
                <MainCarousel>
                    <div className="item"><CarouselItem /></div>
                    <div className="item"><CarouselItem /></div>
                    <div className="item"><CarouselItem /></div>
                    
                </MainCarousel>
            </div>
        </div>
    )
}

