import React from "react";
import "./CarouselItem.css"

export const CarouselItem = (props) => {

    return(
        <div className="item-container">
            <div className="item-content">
                <div className="upper-text-container">
                    <div className="upper-text-line"></div>
                    <div className="upper-text">100% PREMIUM QUALITY</div>
                </div>
                <div className="item-title">{props.drink.title}</div>
                <div className="item-content">{props.drink.description.slice(0, 60) + "..."}</div>
                <button className="item-button">Explore Now</button>
            </div>
            <div className="item-image">
                <img src={props.drink.image} height="550px"/>
            </div>
        </div>
    )
}
