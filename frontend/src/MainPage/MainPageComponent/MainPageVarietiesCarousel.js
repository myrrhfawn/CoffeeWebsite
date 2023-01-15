import React, { useEffect, useState } from "react";
import {VarietiesCarousel} from "./MainCarousel/VarietiesCarousel/VarietiesCarousel.js"
import {VarietiesCarouselItem} from "./MainCarousel/VarietiesCarousel/VarietiesCarouselItem.js"
import "./MainPageVarietiesCarousel.css"
import { connect } from "react-redux";
import { VarietiesFetchData } from "../../redux/reducers/mainpage-reducer";


function MainPageVarietiesCarousel({fetchData, varieties}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [varieties])

    return(
        <div className="main_content">
            <div className="variety_carousel_container">
                <VarietiesCarousel>
                    {varieties.map((variety, index) => {
                        return <div key={index} className="variety_item"><VarietiesCarouselItem variety={variety} /></div>
                    })}
                </VarietiesCarousel>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        varieties: state.mainPageReducer.varieties
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(VarietiesFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageVarietiesCarousel);
