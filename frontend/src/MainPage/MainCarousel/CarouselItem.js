import React from "react";
import "./CarouselItem.css"
import image from "../images/ChestnutPralineLatte.png"

export const CarouselItem = (props) => {

    return(
        <div className="item-container">
            <div className="item-content">
                <div className="upper-text">- 100% quality</div>
                <div className="item-title">Brazilean Sweet Cappucino</div>
                <div className="item-content">Premium coffe bleands for everyone bu labella.</div>
                <button className="item-button">Explore Now</button>
            </div>
            <div className="item-image">
                <img src={image} height="500px"/>
            </div>
        </div>
    )
}
