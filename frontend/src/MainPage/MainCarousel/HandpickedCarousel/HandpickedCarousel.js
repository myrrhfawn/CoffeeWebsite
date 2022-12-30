import React, { Children, cloneElement, useEffect, useState } from "react";
import s from "./HandpickedCarousel.module.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
const PAGE_WIDTH = 100;

export const HandpickedCarousel = ({children}) =>  {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [swipe, setSwipe] = useState(false);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            if(newOffset > 0){
                return currentOffset - (PAGE_WIDTH)* (pages.length - 1);
            }
            return newOffset;
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - (PAGE_WIDTH);
            const maxOffset = -((PAGE_WIDTH) * (pages.length - 1));
            if(newOffset < maxOffset){
                return maxOffset + (PAGE_WIDTH) * (pages.length - 1);
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
        ,6000
        );
    
      }, [swipe]);

    

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}%`,
                        maxWidth: `${PAGE_WIDTH}%`,
                    }
                })
            })
        )
    }, [children]);
    

    return(
        <div className={s.carousel_container}>
            <BiChevronLeftCircle size = '10' className={s.arrow} onClick={handleLeftArrowClick} />
            <div className={s.carousel_window}>
                <div className={s.all_pages_container}
                style={{
                    transform: `translateX(${offset}%)`,
                }}>
                    {pages}</div>
            </div>
            <BiChevronRightCircle size = '10' className={s.arrow} onClick={handleRightArrowClick} />
        </div>
    )
}
