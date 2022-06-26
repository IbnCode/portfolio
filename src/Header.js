import {  useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState("white");


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
        <nav className="nav">
            <h1 className="ahmed">

        <a href="/" onClick={(e) => {toComponentB("/", e); return false}  }  >
                        Ahmed Al Mudarris
        </a>

                    </h1>
            <ul>
            <a className="navitem" href="/Education" onClick={(e) => {toComponentB("/Education", e)}}>Education</a>
            <a className="navitem" href="/Projects" onClick={(e) => {toComponentB("/Projects",e)}}>Projects</a>
            <a className="navitem" href="/Experience" onClick={(e) => {toComponentB("/Experience",e)}}>Experience</a>
            <img src={mode === "dark" ? "sun3.png" : "moon3.png"} onClick={switchMode}/>

            </ul>
            
        </nav>
        </div>
</div>
    )

}
 

export default Header;