import React from 'react';
import gransheradLake from "./resources/img/Gransherad Lake.jpg";
import telemark1 from "./resources/img/telemark1-min.jpg";
import telemark2 from "./resources/img/fjordBySweden.jpg";
import telemark3 from "./resources/img/telemark3-min.jpg";
import telemark4 from "./resources/img/telemark4-min.jpg";
import telemark5 from "./resources/img/telemark5-min.jpg";

import './Home.css';

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div className="img-container">
            <div className="img-column left-column">
            <div className="img-box"><img src={gransheradLake} alt='gransherad lake' /></div>
            <div className="img-box"><img src={telemark1} alt='telemark1' /></div>
            <div className="img-box"><img src={telemark2} alt='telemark2' /></div>
            </div>             
            <div className="img-column right-column">
            <div className="img-box"><img src={telemark3} alt='telemark3' /></div>
            <div className="img-box"><img src={telemark4} alt='telemark4' /></div>
            <div className="img-box"><img src={telemark5} alt='telemark5' /></div>
            </div>
            </div>
                                                         
        </div>
    )
}
