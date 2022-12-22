import React from "react";
import axios from "axios";
import {useState, useEffect} from "react"
import List from "./List";


export default function MainPageContent() {

    const [drinks , setNewDrinks] = useState(null)
    const [varts , setNewVarieties] = useState(null)
    useEffect(() => {
        getDrinks()
    } ,[])
    useEffect(() => {
        getVarts()
    } ,[])
    
    function getDrinks() {        
        axios({
            method: "GET",
            url:"http://127.0.0.1:8000/api/drinklist/",
            }).then((response)=>{
            const data = response.data
            setNewDrinks(data)
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                     console.log(error.response.headers);
                }
            })
    }   
    
    function getVarts() {        
        axios({
            method: "GET",
            url:"http://127.0.0.1:8000/api/varietylist/",
            }).then((response)=>{
            const data = response.data
            setNewVarieties(data)
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log(error.response.status);
                     console.log(error.response.headers);
                }
            })
    }  

    return(
        <div className="main_content">
            <h1>Головна сторінка</h1>
            <h2>Сорти кави</h2>
            <ul>
             {varts != null && varts.map(vart => <li><List title={vart.title} /></li>)}
            </ul>
            <h2>Напої</h2>
            <ul>
                {drinks != null && drinks.map(drink => <li><List title={drink.title} /></li>)}
            </ul>
        </div>
    )
}

