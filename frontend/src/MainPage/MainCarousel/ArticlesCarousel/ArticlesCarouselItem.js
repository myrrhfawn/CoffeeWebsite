import React from "react";
import s from"./ArticlesCarouselItem.module.css";
import image from "../../images/handpicked_background.jpg"


export const ArticlesCarouselItem = ({article}) => {
    const options = {  day: 'numeric', year: 'numeric', month: 'long' };
    const time_create  = new Date(article.time_create);

    return(
        
       <div className={s.item_container}>
            <div className={s.item_image}>
                <img src={article.image}></img>
            </div>
            <div className={s.item_content}>
                <div className={s.item_subtitle}>
                    {"Wenheay Theme | " + time_create.toLocaleDateString("en-US", options)}
                </div>
                <div className={s.item_title}>
                    <h1>{article.title}</h1>
                </div>
                <div className={s.item_description}>
                    {article.text.slice(0, 95  ) + "..."}
                </div>
            </div>
       </div>
    )
}