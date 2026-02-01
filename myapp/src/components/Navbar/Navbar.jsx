import React from "react";
import './Navbar.css'




const Navbar = () => {
    return(
    <div>

    <nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">contact</a>
        <ul>
            <li><a href="#">home</a></li>
            </ul>
            </li>
         <li><a href="#">carrier</a></li>
         <li><a href="#">Gallery</a></li>
         <li><a href="#">about us</a></li>
         <li><a href="#">location</a></li>

    </ul>
    </nav>
    </div>
    )
}
export default Navbar