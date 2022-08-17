import React from "react";
import classes from './HamburgerButton.module.css';

export const Button = (props) => {
    return(
        <div className={classes.Button} onClick={() => props.clicked()}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}