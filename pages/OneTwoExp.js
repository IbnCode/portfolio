import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import React  from 'react';



const OneTwoExp = ({pkgs}) => {
    let loc = useLocation();
    return ( 

        
        <div className={loc.state.mody}>
        <div className="home">
         {pkgs.map((pkg) =>  (
            <div className={pkg.id == 0 ? 'first': 'none'} key = {pkg.id}>
                    <div   className={pkg.id % 2 == 1 ? 'two': 'one'}  >
                    <img src = {pkg.pic} />
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


        </div>
);
}
 
export default OneTwoExp;