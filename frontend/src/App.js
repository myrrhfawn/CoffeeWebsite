import React from "react";
import "./App.css"
import MainPageNav from "./MainPage/MainPageNav";
import MainPageContent from "./MainPage/MainPageContent";


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
