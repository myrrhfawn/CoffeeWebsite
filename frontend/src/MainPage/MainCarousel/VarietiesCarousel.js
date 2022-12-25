import React, { Children, cloneElement, useEffect, useState } from "react";
import "./VarietiesCarousel.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const PAGE_WIDTH = 269;

export const VarietiesCarousel = ({children}) =>  {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);


    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            if(newOffset > 0){
                return currentOffset - PAGE_WIDTH* (pages.length - 4);
            }
            return newOffset;
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 4));
            if(newOffset < maxOffset){
                return currentOffset + PAGE_WIDTH * (pages.length - 4);
            }
            return newOffset;
            /*return Math.max(newOffset, maxOffset);*/
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
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
        <div className="carousel-container">
            <BiChevronLeftCircle size = '70' className="arrow" onClick={handleLeftArrowClick} />
            <div className="carousel-window">
                <div className="all-pages-container"
                style={{
                    transform: `translateX(${offset}px)`,
                }}>
                    {pages}</div>
            </div>
            <BiChevronRightCircle size = '70' className="arrow" onClick={handleRightArrowClick} />
        </div>
    )
}
