import React from "react";
import s from"./HandpickedCarouselItem.module.css";
import image from "../../images/ChestnutPralineLatte.png";
import likesIcon from "../../images/likes_icon.png"
import { AiOutlineHeart } from "react-icons/ai"

export const HandpickedCarouselItem = ({drink}) => {
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
                <div className={s.item_title}>{drink.title}</div>
                <div className={s.item_price}>{"₴" + drink.price + " UAH"}</div>
                <div className={s.item_rating_container}>
                    <div className={s.item_rating}>
                        {rating.map((rate, index) => {
                            return (rate ? <div key={index} className={s.star}>★</div> : 
                                <div key={index} className={s.star}>☆</div> )
                            }  
                        )}
                    </div>
                    <div className={s.item_review}>{"( " + drink.review + " reviews)"}</div>
                </div>
                <div className={s.item_button_container}>
                    <div className={s.item_button_cart}>
                        <button>Add to cart</button>
                    </div>
                    <div className={s.item_button_like}>
                        <button><AiOutlineHeart size='20'/></button>
                    </div>
                </div>            
            </div>
        </div> 
    )
}
