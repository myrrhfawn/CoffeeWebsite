import React from "react";
import s from"./TrendingCarouselItem.module.css";
import image from "../../images/ChestnutPralineLatte.png"

export const TrendingCarouselItem = ({drink}) => {
    
    const rating= [];

    for(var i = 0; i < drink.rating; i++ ){
        rating.push(true);
    }
    for(var i = 0; i < 5 - drink.rating; i++){
        rating.push(false);
    }

    return(
       <div className={s.item_container}>
            <div className={s.item_image}>
                <img src={drink.image}></img>
            </div>
            <div className={s.item_content}>
                <div className={s.item_title}>
                    {drink.title.length < 26 ? drink.title : drink.title.slice(0, 26) + "..."}
                </div>
                <div className={s.item_price}>
                    {"₴" + drink.price + " UAH"}
                </div>
                <div className={s.item_rating_container}>
                    <div className={s.item_rating}>
                        {rating.map((rate, index) => {
                            return (rate ? <div key={index} className={s.star}>★</div> : 
                                <div key={index} className={s.star}>☆</div> )
                            }  
                        )}
                    </div>
                    <div className={s.item_reviews}>
                        {"( " + drink.review + " reviews)"}
                    </div>
                </div>
            </div>
       </div>
    )
}
