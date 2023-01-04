import React, { useEffect, useState } from "react";
import "./Trending.css"
import { TrendingCarousel} from "./MainCarousel/TrendingCarousel/TrendingCarousel"
import { TrendingCarouselItem } from "./MainCarousel/TrendingCarousel/TrendingCarouselItem";
import { connect } from "react-redux";
import { DrinksFetchData } from "../redux/reducers/mainpage-reducer";


function Trending({fetchData, trending}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [trending])

    return(
        <div className="trending_product">
            <div className="trending_upper">
                <div className="trending_title">    
                    <h1 className="trending_title_gray">Trending</h1>
                    <h1 className="trending_title_green">Product</h1>                       
                </div>
                <div className="trending_all_products">
                    View All Products>
                </div>
            </div>
            <div className="trending_carousel_container">
                <TrendingCarousel>
                    {trending.map((drink, index) => {
                        return <div key={index} className="trending_item"><TrendingCarouselItem drink={drink} /></div>
                    })}
                </TrendingCarousel>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        trending: state.mainPageReducer.drinks
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(DrinksFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
