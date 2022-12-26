import React, { useEffect, useState } from "react";
import {DrinksCarousel} from "./MainCarousel/DrinksCarousel/DrinksCarousel.js"
import {DrinksCarouselItem} from "./MainCarousel/DrinksCarousel/DrinksCarouselItem.js"
import "./MainPageDrinksCarousel.css"
import { connect } from "react-redux";
import { FetchData } from "../redux/actions/drinks-action";


function MainPageDrinksCarousel({fetchData, drinks}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData("drinklist")
    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [drinks])
    return(
        <div className="main_content">
            <div className="drinks_carousel_container">
                <DrinksCarousel>
                    {drinks.map((drink, index) => {
                        return <div key={index} className="drink_item"><DrinksCarouselItem drink={drink} /></div>
                    })}

                   {/*<div className="item"><CarouselItem /></div>*/}
                </DrinksCarousel>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        drinks: state.drinksReducer
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (type) => dispatch(FetchData(type))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDrinksCarousel);