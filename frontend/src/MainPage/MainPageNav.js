import React from "react";
import searchIcon from "./images/search_icon.png"
import SVGLight from "./images/SVGLight.svg"
import profileIcon from "./images/profile_icon.png"
import likesIcon from "./images/likes_icon.png"
import bagIcon from "./images/bag_icon.png"
import "./MainPageNav.css"

export default function MainPageNav() {
    return(
    <nav className="navbar">
        <div className="nav_upper">
            <div className="nav_search">
                <input type="text" placeholder="Search product" />
                <a href="#"><img src={searchIcon} alt="" /></a>
            </div>
            <div className="nav_logo">
                <a href="#"><img src={SVGLight} height="50" width="50" /></a>
            </div>
            <div className="nav_menu">
                <a href="#"><img src={profileIcon} /></a>
                <a href="#"><img src={likesIcon} /></a>
                <a href="#"><img src={bagIcon} /></a>
            </div>
        </div>
        <div className="nav_list">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">COLLECTIONS</a></li>
                <li><a href="#">RICH AROMA</a></li>
                <li><a href="#">ROASTED</a></li>
                <li><a href="#">COFFE BEAN</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">PAGES</a></li>
            </ul>
        </div>
    </nav>
    )
}