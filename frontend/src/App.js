import React from "react";
import "./App.css"
import MainPageNav from "./MainPage/MainPageNav.js";
import MainPageDrinksCarousel from "./MainPage/MainPageDrinksCarousel.js";
import MainPageVarietiesCarousel from "./MainPage/MainPageVarietiesCarousel.js";


function App() {
  return (
    <div className="wrapper">
      <div className="main_page">
        <MainPageNav />
        <MainPageDrinksCarousel />
      </div>
      <div className="main_page_content">
        <div className="content">
          <MainPageVarietiesCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
