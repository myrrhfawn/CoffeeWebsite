import React from "react";
import "./App.css"
import MainPageNav from "./MainPage/MainPageNav.js";
import MainPageDrinksCarousel from "./MainPage/MainPageDrinksCarousel.js";
import MainPageVarietiesCarousel from "./MainPage/MainPageVarietiesCarousel.js";
import Handpicked from "./MainPage/Handpicked";
import HandpickedOrder from "./MainPage/HandpickedOrder";


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
      </div>
    </div>
  );
}

export default App;
