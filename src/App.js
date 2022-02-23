import React from "react";
import ParticleBG from "./components/ParticleBG";

function App() {

    return(
        <div>
        <ParticleBG/>
        <div className="mainPage">
            <h1 className="bigName">greg sherman</h1>
            <p className="subText">under construction</p>
            <a href="https://github.com/GregSherman" className="link">GitHub  </a>
            <a href="resources/Greg Resume.pdf" className="link">  Resume  </a>
            <a href="https://www.linkedin.com/in/greg-sherman-aa20101b5/" className="link">  LinkedIn  </a>
            <a href="mailto: greg.sherman@mail.utoronto.ca" className="link">  Email  </a>
        </div>
        </div>
    );
}

export default App;