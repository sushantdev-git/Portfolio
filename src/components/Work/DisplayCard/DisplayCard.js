import React from "react";
import './DisplayCard.css'
export const DisplayCard = (props) => {
    
    return(
        <div className="DisplayCard">
            <div className="info">
                <div className="Text">
                    <h1>{props.title}</h1>
                    <h3>{props.subDes}</h3>
                    <p>
                        {props.des}
                    </p>
                </div>
                <div className="Image">
                    <img src="https://avatars.githubusercontent.com/u/70423224?v=4" />
                </div>
            </div>
            <div className="tech">
                <ul>
                    {props.tech.map(tName => <li>{tName}</li>)}
                </ul>
            </div>
            <div>
                <p>Source Code</p>
            </div>
        </div>
    )
}