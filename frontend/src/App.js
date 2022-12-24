import React from "react";
import "./App.css"
import MainPageNav from "./MainPage/MainPageNav.js";
import MainPageContent from "./MainPage/MainPageContent.js";


function App() {
  return (
    <div className="wrapper">
      <div className="main_page">
        <MainPageNav />
        <MainPageContent />
      </div>
    </div>
  );
}

export default App;
