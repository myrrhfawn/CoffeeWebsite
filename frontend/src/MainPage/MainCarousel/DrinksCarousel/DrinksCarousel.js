import React, { Children, cloneElement, useEffect, useState } from "react";
import s from "./DrinksCarousel.module.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const PAGE_WIDTH = 1200;

export const DrinksCarousel = ({children}) =>  {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(-PAGE_WIDTH);


    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                 console.log("11")
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [children]);
    

    return(
        <div className={s.carousel_container}>
            <BiChevronLeftCircle size = '70' className={s.arrow} onClick={handleLeftArrowClick} />
            <div className={s.carousel_window}>
                <div className={s.all_pages_container}
                style={{
                    transform: `translateX(${offset}px)`,
                }}>
                    {pages}</div>
            </div>
            <BiChevronRightCircle size = '70' className={s.arrow} onClick={handleRightArrowClick} />
        </div>
    )
}
