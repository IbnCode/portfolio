import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import React  from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState("light");
    const ref = useRef(null);
    const [menu, setMenu] = useState("closed");
    const [toggle, setToggle] = useState("toggleClosed");
    let loc = useLocation();

    const jary = () => {
        if (menu === "opened"){
            setMenu("closed");
            setToggle("toggleClosed")
        }
        else{
            setMenu("opened");
            setToggle("toggleOpened")

        }
    }

  const toComponentB=(child, e)=>{
    navigate(  child, {state:{mody : mode}});
    e.preventDefault();
    return false;
      }

   const switchMode = () => {
        if (mode === "light") {
            setMode("dark");
            navigate(  window.location.pathname, {state:{mody : "dark"}});

        }
        else {
            setMode("light");
            navigate(  window.location.pathname, {state:{mody : "light"}});
     }


    }

    return (
        <div className="header">
        <div className={loc.state == null ? "light" : loc.state.mody}>
        <div className={toggle}>

        <nav className="nav">
            <h3 className="ahmed" ref={ref}>

        <a href="/" onClick={(e) => {toComponentB("/", e); return false}  }  >
                        Ahmed Al Mudarris
        </a>

                    </h3>
                    <div className="navItems" >
            <a className="navitem" href="/Education" onClick={(e) => {toComponentB("/Education", e)}}>Education</a>
            <a className="navitem" href="/Awards_and_Extracurriculars" onClick={(e) => {toComponentB("/Awards_and_Extracurriculars",e)}}>Awards and Extracurriculars</a>
            <a className="navitem" href="/Experience" onClick={(e) => {toComponentB("/Experience",e)}}>Experience</a>

            <img className="navitem" src={loc.state == null ? "moon3.png" : loc.state.mody === "dark" ? "sun3.png" : "moon3.png"}  onClick={switchMode}/>
            </div>

            <div className= {menu} onClick={() => jary()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </div>

        </nav>
        <div className="abood"> da</div>
        </div>
        </div>
</div>
    )

}


export default Header;
