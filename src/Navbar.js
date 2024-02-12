import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">Home</Link>
            <a href="#menu">Menu</a>
            <a href="#about">About Us</a>
            {/*<a href="#blog">Blog</a>*/}
        </div>
     );
}
 
export default Navbar;
