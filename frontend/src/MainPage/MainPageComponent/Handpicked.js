import React, { useEffect, useState } from "react";
import "./Handpicked.css"
import {HandpickedCarousel} from "./MainCarousel/HandpickedCarousel/HandpickedCarousel"
import { HandpickedCarouselItem } from "./MainCarousel/HandpickedCarousel/HandpickedCarouselItem";
import { connect } from "react-redux";
import { HandpickedFetchData } from "../../redux/reducers/mainpage-reducer";


function Handpicked({fetchData, handpicked}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData()

    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [handpicked])


    const drinks = handpicked.reduce(function (rows, key, index) { 
        return (index % 2 == 0 ? rows.push([key]) 
          : rows[rows.length-1].push(key)) && rows;
      }, []);

    return(
        <div className="handpicked_product">
            <div className="handpicked_text">
                <div className="handpicked_title">
                    <h1 className="handpicked_title_gray">Handpicked</h1>
                    <h1 className="handpicked_title_green">Product</h1>
                </div>
                <div className="handpicked_description">
                    <p>Contrary to populary beliefs, Lorem then Choose a piece of classical</p>
                </div>
            </div>   
            <div className="handpicked_block">
                <div className="handpicked_carousel">
                    <div className="handpicked_carousel_container">
                        <HandpickedCarousel>
                            {drinks.map((drink, index) => {
                                return <div key={index} className="handpicked_item">
                                        <HandpickedCarouselItem drink={drink[0]}/>
                                        <HandpickedCarouselItem drink={drink[1]}/>
                                    </div>
                            })}
                        </HandpickedCarousel>
                    </div>
                </div>
                <div className="handpicked_content">
                    <div className="handpicked_content_text">
                        <p className="handpicked_content_top">New user sale</p>
                        <p className="handpicked_content_bottom">50% OFF</p>
                        <div className="handpicked_content_button">
                        <button>Explore Offer`s</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        handpicked: state.mainPageReducer.handpicked
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(HandpickedFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Handpicked);
