import React from "react";
import './Intro.css';

export const Intro = () => {
    return (
        <div className="Intro">
            <div className="Text">
                <h3>Hi there, I'm</h3>
                <h1>Sushant.</h1>
                <h2>I'm a aspiring Software Engineer.</h2>
                <p>I have been working in front end since a year. I have been working with React and Flutter.</p>
                <p>Currently I'm in my IInd year and pursuing B.E CS from Chitkara University.</p>
            </div>
            <div className="Image">
                <img src="https://avatars.githubusercontent.com/u/70423224?v=4"/>
            </div>
        </div>
    )
}