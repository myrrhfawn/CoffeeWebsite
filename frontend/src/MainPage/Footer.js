import React from "react";
import "./Footer.css"
import {FaLinkedinIn, FaTwitter, FaInstagram, FaTumblr, FaGithub, FaFacebookF} from "react-icons/fa";
import footerlogo from "./images/SVGLight.svg"
import bottom_transition from "../images/bottom_transition_background.png" 
import visa from "./images/visa_icon.png"
import sage from "./images/sage_icon.png"
import american_express from "./images/american_express_icon.png"
import cirrus from "./images/cirrus_icon.png"
import mastercard from "./images/mastercard_icon.png"
import skrill from "./images/skrill_icon.png"

export default function footer() {
    return(
    <footer className="footer">
        <img className="bottom_transition" src={bottom_transition}/>
        <div className="footer_content">
            <div className="footer_info">
                <div className="footer_logo">
                    <img src={footerlogo}></img>
                </div>
                <div className="footer_text">
                    A quality apparels will make use of premium materials to create a piece of clothings that you will be proud to call your own.
                </div>
                <div className="footer_rating_title">
                    User Ratings
                </div>
                <div className="footer_rating">
                    <div className="star">★</div>
                    <div className="star">★</div>
                    <div className="star">★</div>
                    <div className="star">★</div>
                    <div className="star">★</div>
                </div>
                <div className="footer_rating_description">
                    <div className="footer_rating_green">(5.0)</div>
                    <div className="footer_rating_gray">review based on 2990</div>
                </div>
                <div className="footer_social">
                    <a><FaLinkedinIn size="25" className="footer_social_icon"/></a>
                    <a><FaInstagram size="25" className="footer_social_icon"/></a>
                    <a><FaTwitter size="25" className="footer_social_icon"/></a>
                    <a><FaGithub size="25" className="footer_social_icon"/></a>
                    <a><FaTumblr size="25" className="footer_social_icon"/></a>
                    <a><FaFacebookF size="25" className="footer_social_icon"/></a>
                </div>
            </div>
            <div className="footer_quicks_links">
                <div className="footer_title">Quicks Links</div>
                <ul>
                    <li><a>About company</a></li>
                    <li><a>Labella profesional</a></li>
                    <li><a>Customer review</a></li>
                    <li><a>Modern slavery act</a></li>
                    <li><a>Gifts & vouchers</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Contact us</a></li>
                </ul>
            </div>
            <div className="footer_top_categories">
                <div className="footer_title">Quicks Links</div>
                <ul>
                    <li><a>Arabica green</a></li>
                    <li><a>Arabica roast</a></li>
                    <li><a>Robusta roast</a></li>
                    <li><a>Kenya beans</a></li>
                    <li><a>Mexican beans</a></li>
                    <li><a>Light roasted</a></li>
                    <li><a>Medium roasted</a></li>
                </ul>
            </div>
            <div className="footer_account">
                <div className="footer_title">My Account</div>
                <ul>
                    <li><a>My order</a></li>
                    <li><a>Track my order</a></li>
                    <li><a>Help center</a></li>
                    <li><a>Return policy</a></li>
                    <li><a>Terms & condition</a></li>
                    <li><a>Report a bug</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="footer_links">
                <div className="footer_title">Useful Links</div>
                <ul>
                    <li><a>About us</a></li>
                    <li><a>Contact us</a></li>
                    <li><a>Faq's</a></li>
                    <li><a>Payment policy</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Shipping policy</a></li>
                    <li><a>Sitemap</a></li>
                </ul>
            </div>
        </div>  
        <div className="footer_copyright">
            <div className="footer_copyright_text">Copyright © 2021 MyrrhFawn.com All Rights Reserved.</div>
            <div className="footer_payments_icons">
                <div className="payments_icon">
                    <a><img src={visa}/></a>
                </div>
                <div className="payments_icon">
                    <a><img src={sage}/></a>
                </div>
                <div className="payments_icon">
                    <a><img src={american_express}/></a>
                </div>
                <div className="payments_icon">
                    <a><img src={cirrus}/></a>
                </div>
                <div className="payments_icon">
                    <a><img src={mastercard}/></a>
                </div>
                <div className="payments_icon">
                    <a><img src={skrill}/></a>
                </div>
            </div>
        </div>
    </footer>
    )
}