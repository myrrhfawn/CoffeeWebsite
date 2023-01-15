import React from "react";
import "./MainPage.css"
import MainPageDrinksCarousel from "./MainPageComponent/MainPageDrinksCarousel.js";
import MainPageVarietiesCarousel from "./MainPageComponent/MainPageVarietiesCarousel.js";
import Handpicked from "./MainPageComponent/Handpicked";
import HandpickedOrder from "./MainPageComponent/HandpickedOrder";
import Trending from "./MainPageComponent/Trending";
import ClientsTestimonial from "./MainPageComponent/ClientsTestimonial"
import FeaturedArticles from "./MainPageComponent/FeaturedArticles";
import top_transition from "../images/top_transition_background.png"

function MainPage() {
  return (
    
    <div className="main_page">
        <MainPageDrinksCarousel />
        <img className="top_transition" src={top_transition}/>
        <div className="main_page_content">
            <div className="varieties_container">
                <MainPageVarietiesCarousel />
            </div>
            <div className="handpicked_container">
                <Handpicked />
            </div>
            <div className="handpicked_order_container">
                <HandpickedOrder />
            </div>
            <div className="trending_container">
                <Trending />
            </div>
            <div className="clients_tectimonial_container">
                <ClientsTestimonial />
            </div>
            <div className="featured_articles_container">
                <FeaturedArticles />
            </div>
        </div> 
    </div>
  );
}

export default MainPage;
