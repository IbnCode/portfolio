import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import React  from 'react';
import useFetch from "./useFetch";



const OneTwo = ({pkgs}) => {
    let loc = useLocation();
    let img = new Array(pkgs.length);
    console.log(img)

    for (let i = 0; i < (pkgs.length); i++){
        img[i] = useFetch(pkgs[i].pic)
    }
    
    return ( 
    
        <div className={loc.state == null ? "light" : loc.state.mody}>
            {img &&
        <div className="home">
         {pkgs.map((pkg) =>  (
            <div className={pkg.id == 0 ? 'first': 'none'} key = {pkg.id}>
                    <div   className={pkg.id % 2 == 1 ? 'two': 'one'}  >
                    <img src = {require("../public/" +  pkg.pic)} />
                    <h3>
                    {pkg.title}
                </h3>
                <h5>
                    {pkg.location}
                </h5>
                <h5>
                    {pkg.period}
                </h5>
                <p>
                    {pkg.body}
                </p>

                </div>

            </ div>
         ))}

        </div>
    }


    </div> 

);
}
 
export default OneTwo;