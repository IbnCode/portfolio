import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import React  from 'react';
import './index.css';

const HeaderNew = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState("white");
    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
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
        <Container   >
      <style type="text/css">
        {`
    .nav-primary {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
        <Navbar variant={mode} fixed="top" collapseOnSelect expand="lg" bg ={mode}>
            <Container>
            <Navbar.Brand href="/" onClick={(e) => {toComponentB("/", e); return false}  }>Ahmed Al Mudarris</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={(e) => {toComponentB("/Education", e); return false}  } href="/Education" >Education </Nav.Link>
                    <Nav.Link onClick={(e) => {toComponentB("/Experience", e); return false}  } href="/Experience" >Experience </Nav.Link>
                    <Nav.Link onClick={(e) => {toComponentB("/Projects", e); return false}  } href="/Projects" >Projects </Nav.Link>
                    <Image className="d-inline-block align-center" rounded={true} src={mode === "dark" ? "sun3.png" : "moon3.png"} onClick={switchMode} width={20} height={20} />

                </Nav>
            </Navbar.Collapse>
            </Container>

        </Navbar>
        </Container>
        )

}
 

export default HeaderNew;