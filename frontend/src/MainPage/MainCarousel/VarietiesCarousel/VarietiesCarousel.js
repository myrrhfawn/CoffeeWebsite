import React, { Children, cloneElement, useEffect, useState } from "react";
import s from "./VarietiesCarousel.module.css";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

const PAGE_WIDTH = 95;

export const VarietiesCarousel = ({children}) =>  {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [swipe, setSwipe] = useState(false);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH/4;
            if(newOffset > 0){
                return currentOffset - (PAGE_WIDTH/4)* (pages.length - 4);
            }
            return newOffset;
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - (PAGE_WIDTH/4);
            const maxOffset = -((PAGE_WIDTH/4) * (pages.length - 4));
            if(newOffset < maxOffset){
                return maxOffset + (PAGE_WIDTH/4) * (pages.length - 4);
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
         ,4000
         );
     
       }, [swipe]);

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH/4}%`,
                        maxWidth: `${PAGE_WIDTH/4}%`,
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
