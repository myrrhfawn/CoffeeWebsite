import React, { Children, cloneElement, useEffect, useState } from "react";
import "./MainCarousel.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const PAGE_WIDTH = 1150;

export const MainCarousel = ({children}) =>  {
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
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, []);
    

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
