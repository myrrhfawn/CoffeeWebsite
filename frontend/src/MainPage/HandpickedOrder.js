import React from "react";
import "./HandpickedOrder.css"
import image from "./images/order_image.png";

function HandpickedOrder({fetchData, handpicked}) {  
   
    return(
        <div className="handpicked_order_container">
            <div className="handpicked_ordrder_image">
                <img src={image} />
            </div>
            <div className="handpicked_order_content">
                <div className="handpicked_order_title">
                    Brasilian Coffee Buy 1 + Get 1 Free
                </div>
                <div className="handpicked_order_subtitle">
                    Order Now! And Get 50% Off
                </div>
                <div className="handpicked_order_description">
                    Lorem ipsum dolors sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectuset justo feugiat euismod sederat.
                </div>
                <div className="handpicked_order_button">
                    <button>Purchase Now</button>
                </div>
            </div>
        </div>
    )
}

export default HandpickedOrder;