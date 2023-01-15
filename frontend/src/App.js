import React from "react";
import "./App.css"
import MainPage from "./MainPage/MainPage";
import MainPageNav from "./MainPage/MainPageNav.js";
import Footer from "./MainPage/Footer.js"

function App() {
  return (
    <div className="wrapper">
      <MainPageNav />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
