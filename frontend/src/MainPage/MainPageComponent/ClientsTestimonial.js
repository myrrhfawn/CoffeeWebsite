import React, { useEffect, useState } from "react";
import "./ClientsTestimonial.css"
import avatar from "./images/clients_avatar.jpg"
import logo1 from "./images/clients_logo1.png"
import logo2 from "./images/clients_logo2.png"
import logo3 from "./images/clients_logo3.png"
import logo4 from "./images/clients_logo4.png"
import logo5 from "./images/clients_logo5.png"
import logo6 from "./images/clients_logo6.png"


function ClientsTestimonial() {  
    

    return(
        <div className="clients_testimonial">
            <div className="clients_testimonial_content">
                <div className="clients_testimonial_title">
                    <h1 className="clients_testimonial_title_white">Client′s</h1>
                    <h1 className="clients_testimonial_title_green">Testimonial</h1>
                </div>
                <div className="clients_testimonial_carousel">
                    <div className="clients_testimonial_item">
                        <div className="clients_testimonial_upper">
                            <div className="clients_testimonial_image">
                                <img src={avatar} height="100px"></img>
                            </div>
                            <div className="clients_testimonial_info">
                                <div className="clients_testimonial_name">
                                    Michael Corner
                                </div>
                                <div className="clients_testimonial_profession">
                                    Master Chef
                                </div>
                            </div>       
                        </div>
                        <div className="clients_testimonial_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </div>
                    </div>
                    <div className="clients_testimonial_item">
                        <div className="clients_testimonial_upper">
                            <div className="clients_testimonial_image">
                                <img src={avatar} height="100px"></img>
                            </div>
                            <div className="clients_testimonial_info">
                                <div className="clients_testimonial_name">
                                    Michael Corner
                                </div>
                                <div className="clients_testimonial_profession">
                                    Master Chef
                                </div>
                            </div>       
                        </div>
                        <div className="clients_testimonial_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </div>
                    </div>
                    <div className="clients_testimonial_item">
                        <div className="clients_testimonial_upper">
                            <div className="clients_testimonial_image">
                                <img src={avatar} height="100px"></img>
                            </div>
                            <div className="clients_testimonial_info">
                                <div className="clients_testimonial_name">
                                    Michael Corner
                                </div>
                                <div className="clients_testimonial_profession">
                                    Master Chef
                                </div>
                            </div>       
                        </div>
                        <div className="clients_testimonial_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </div>
                    </div>
                </div>
            </div>
            <div className="clients_testimonial_logos">
                <img src={logo1}></img>
                <img src={logo2}></img>
                <img src={logo3}></img>
                <img src={logo4}></img>
                <img src={logo5}></img>
                <img src={logo6}></img>
            </div>
        </div>
    )
}


export default ClientsTestimonial;
