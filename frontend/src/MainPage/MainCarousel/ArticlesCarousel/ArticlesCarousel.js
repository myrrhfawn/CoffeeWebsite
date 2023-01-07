import React, { Children, cloneElement, useEffect, useState } from "react";
import s from "./ArticlesCarousel.module.css";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

const PAGE_WIDTH = 100;

export const ArticlesCarousel = ({children}) =>  {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [swipe, setSwipe] = useState(false);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH/3;
            if(newOffset > 0){
                return currentOffset - (PAGE_WIDTH/3)* (pages.length - 3);
            }
            return newOffset;
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - (PAGE_WIDTH/3);
            const maxOffset = -((PAGE_WIDTH/3) * (pages.length - 3));
            if(newOffset < maxOffset){
                return maxOffset + (PAGE_WIDTH/3) * (pages.length - 3);
            }
            return newOffset;
        })
        setSwipe(!swipe)
    }


    useEffect(() => {
        setSwipe(!swipe)
     }, [])
 
     useEffect(() => {
         setTimeout(
           () =>
             handleRightArrowClick()
         ,40000
         );
     
       }, [swipe]);

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH/3}%`,
                        maxWidth: `${PAGE_WIDTH/3}%`,
                    }
                })
            })
        )
    }, [children]);
    

    return(
        <div className={s.carousel_container}>
            <HiOutlineArrowCircleLeft size = '35' className={s.arrow} onClick={handleLeftArrowClick} />
            <div className={s.carousel_window}>
                <div className={s.all_pages_container}
                style={{
                    transform: `translateX(${offset}%)`,
                }}>
                    {pages}</div>
            </div>
            <HiOutlineArrowCircleRight size = '35' className={s.arrow} onClick={handleRightArrowClick} />
        </div>
    )
}
