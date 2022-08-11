import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import React  from 'react';
import useFetch from "./useFetch";


const OneTwo = ({pkgs}) => {
    let loc = useLocation();
    const img = useFetch("s3://myimages/Ahmed.jpeg")
    return (

        <div className={loc.state == null ? "light" : loc.state.mody}>
            {
        <div className="home">
         {img && pkgs.map((pkg) =>  (
            <div className={pkg.id == 0 ? 'first': 'none'} key = {pkg.id}>
                    <div   className={pkg.id % 2 == 1 ? 'two': 'one'}  >
                    <img src = {img} />
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
