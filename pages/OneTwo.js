import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import React  from 'react';


const OneTwo = ({pkgs}) => {
    let loc = useLocation();
<<<<<<< Updated upstream:pages/OneTwo.js
    return ( 

        
        <div className={loc.state.mody}>
=======
    const img = useFetch("s3://myimages/Ahmed.jpeg")
    return (

        <div className={loc.state == null ? "light" : loc.state.mody}>
            {
>>>>>>> Stashed changes:src/OneTwo.js
        <div className="home">
         {img && pkgs.map((pkg) =>  (
            <div className={pkg.id == 0 ? 'first': 'none'} key = {pkg.id}>
                    <div   className={pkg.id % 2 == 1 ? 'two': 'one'}  >
<<<<<<< Updated upstream:pages/OneTwo.js
                    <img src = {pkg.pic} />
                <h3>
=======
                    <img src = {img} />
                    <h3>
>>>>>>> Stashed changes:src/OneTwo.js
                    {pkg.title}
                </h3>
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
 
export default OneTwo;