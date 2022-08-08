import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    let loc = useLocation();

    return (        
        <div className={loc.state.mody}>
        <div className="footer">
    <div>
        ahmed.almudarris@gmail.com
    </div>
    <div>
        (647) 507-1462
    </div>
    <div className="footer_images">
        <a href="https://www.linkedin.com/in/ahmed-al-mudarris-11a5381bb/" > <img src="linkedin.png" width={20}></img></a>
        <a href="https://github.com/IbnCode" > <img src="github.png" width={20}></img></a>

    </div>

    </div>
    </div>
     );
}
 
export default Footer;