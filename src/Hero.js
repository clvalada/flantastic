import React from "react";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Hero = () => {
    return ( 
        <div className="hero-image">
            <Navbar />
            <hr></hr>
            <div className="hero-text">
                <h1>¡Flantastic!</h1>
                <h2>Authentic Cuban Flan & Other Tasty Treats</h2>
                <br></br>
                <button>Order Now!</button>
            </div>
            <Socials />
        </div>
     );
}
 
export default Hero;