import React from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";

const Home = () => {
    return ( 
        <div className="home">
            <div>
                <Hero />
            </div>
            <section id="menu">
                <Menu />
            </section>
            <section id="about">
                <About />
            </section>
        </div>
     );
}
 
export default Home;
