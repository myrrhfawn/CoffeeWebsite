import axios from "axios";
import {useState, useEffect} from "react"


export default function MainPageContent() {
    const src = "http://127.0.0.1:8000/api/drinklist/";

    axios({
        method: "GET",
        url:"http://127.0.0.1:8000/api/drinklist/",
      }).then((response)=>{
        const data = response.data
        console.log(data)
    }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          }
      })


    return(
        <div>

        </div>
    )
}