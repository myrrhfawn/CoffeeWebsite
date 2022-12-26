import React from "react";
import s from"./DrinksCarouselItem.module.css";

export const DrinksCarouselItem = (props) => {

    return(
        <div className={s.item_container}>
            <div className={s.item_content}>
                <div className={s.upper_text_container}>
                    <div className={s.upper_text_line}></div>
                    <div className={s.upper_text}>100% PREMIUM QUALITY</div>
                </div>
                <div className={s.item_title}>{props.drink.title}</div>
                <div className={s.item_content}>{props.drink.description.slice(0, 60) + "..."}</div>
                <button className={s.item_button}>Explore Now</button>
            </div>
            <div className={s.item_image}>
                <img src={props.drink.image} height="550px"/>
            </div>
        </div>
    )
}
