import React from "react";
import {Link} from 'react-router-dom';
import baker from "./images/baker.png"


const About = () => {
    return ( 
        <div className="about">
            <div className="about-h1">
                <h1>About</h1>
            </div>
            <div className="about-container">
                <div className="about-image">
                    <img src={baker} alt="cartoon woman baking"></img>
                </div>
                <div className="about-description">
                    <p>Welcome to ¡Flantastic!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.!</p>
                    <p>Duis tristique augue non dolor posuere, sit amet bibendum augue blandit. Aliquam nec molestie libero. In hac habitasse platea dictumst. Vivamus in mauris ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras vitae nisi eget sem luctus consectetur. Duis felis arcu, pretium in semper sed, porttitor eu augue.</p>
                    <br></br>
                    <Link to="https://www.facebook.com/flantasticclt">Facebook</Link>
                    <Link to="mailto:clara@flantastictreats.com">Email</Link>
                </div>
            </div>
        </div>
     );
}
 
export default About;