import React from "react";
import "./App.css"
import MainPageNav from "./MainPage/MainPageNav.js";
import MainPageDrinksCarousel from "./MainPage/MainPageDrinksCarousel.js";
import MainPageVarietiesCarousel from "./MainPage/MainPageVarietiesCarousel.js";
import Handpicked from "./MainPage/Handpicked";
import HandpickedOrder from "./MainPage/HandpickedOrder";
import Trending from "./MainPage/Trending";
import ClientsTestimonial from "./MainPage/ClientsTestimonial"


function App() {
  return (
    <div className="wrapper">
      <div className="main_page">
        <MainPageNav />
        <MainPageDrinksCarousel />
      </div>
      <div className="main_page_content">
          <MainPageVarietiesCarousel />
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
          <div className="content">
            
          </div>
      </div>
    </div>
  );
}

export default App;
