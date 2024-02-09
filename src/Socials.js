import React from "react";
import {Link} from 'react-router-dom';


const Socials = () => {
    return ( 
        <div className="socials">
        <hr></hr>
        <br></br>
        <Link to="https://www.facebook.com/flantasticclt">Facebook</Link>
        <Link to="mailto:clara@flantastictreats.com">Email</Link>
        </div>
     );
}
 
export default Socials;