import React, { useEffect, useState } from "react";
import {VarietiesCarousel} from "./MainCarousel/VarietiesCarousel/VarietiesCarousel.js"
import {VarietiesCarouselItem} from "./MainCarousel/VarietiesCarousel/VarietiesCarouselItem.js"
import "./MainPageVarietiesCarousel.css"
import { connect } from "react-redux";
import { FetchData } from "../redux/actions/drinks-action";


function MainPageVarietiesCarousel({fetchData, varieties}) {  
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        fetchData("varietylist")
    }, []);

    useEffect(() => {
        setRerender(!rerender);
    }, [varieties])

    console.log(varieties);

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
        varieties: state.varietiesReducer
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (type) => dispatch(FetchData(type))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageVarietiesCarousel);
