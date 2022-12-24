import React, { useEffect, useState } from "react";
import {MainCarousel} from "./MainCarousel/MainCarousel.js"
import {CarouselItem} from "./MainCarousel/CarouselItem.js"
import "./MainPageContent.css"
import { connect } from "react-redux";
import { drinksFetchData } from "../redux/actions/drinks-action";


function MainPageContent(props) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        props.fetchData("http://localhost:8000/api/drinklist/")
    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [props.drinks])

    console.log(props.drinks);
    return(
        <div className="main_content">
            <div className="carousel-container">
                <MainCarousel>
                    {props.drinks.map((drink, index) => {
                        return <div key={index} className="item"><CarouselItem drink={drink} /></div>
                    })}

                   {/*<div className="item"><CarouselItem /></div>*/}
                </MainCarousel>
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
        fetchData: url => dispatch(drinksFetchData(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContent);