import React from "react";
import s from"./VarietiesCarouselItem.module.css";
import image from "./images/ArabicaCoffeeBeans.png"

export const VarietiesCarouselItem = ({variety}) => {

    return(
       <div className={s.item_container}>
            <div className={s.item_image}>
                <img className={s.image} src={variety.image} />
            </div>
            <div className={s.item_content}>
                <div className={s.item_title}>{variety.title.replace(/Coffee/i, '')}</div>
                <div className={s.item_description}>{variety.description}</div>
            </div>
       </div>
    )
}
