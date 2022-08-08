import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { Navbar } from 'react-bootstrap';
import React  from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState("white");
    const ref = useRef(null);
    const [menu, setMenu] = useState("closed");
    const [toggle, setToggle] = useState("toggleClosed");

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
        if (mode === "white") {
            setMode("dark");
            navigate(  window.location.pathname, {state:{mody : "dark"}});

        }
        else {
            setMode("white");
            navigate(  window.location.pathname, {state:{mody : "white"}});
     }
        

    }

    return ( 
        <div className="header">
        <div className={mode}> 
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

            <img className="navitem" src={mode === "dark" ? "sun3.png" : "moon3.png"}  onClick={switchMode}/>
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