import React, { useEffect, useState } from "react";
import {DrinksCarousel} from "./MainCarousel/DrinksCarousel.js"
import {CarouselItem} from "./MainCarousel/CarouselItem.js"
import "./MainPageDrinksCarousel.css"
import { connect } from "react-redux";
import { drinksFetchData } from "../redux/actions/drinks-action";


function MainPageDrinksCarousel({fetchData, drinks}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [drinks])

    return(
        <div className="main_content">
            <div className="carousel-container">
                <DrinksCarousel>
                    {drinks.map((drink, index) => {
                        return <div key={index} className="item"><CarouselItem drink={drink} /></div>
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
        fetchData: () => dispatch(drinksFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDrinksCarousel);