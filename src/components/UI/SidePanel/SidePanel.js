import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './SidePanel.css';
import { useHistory } from "react-router";

export const SidePanel = (props) => {

    let navigate = useHistory();


    let classs = [classes.SidePanel];
    if(props.show) classs.push(classes.Show);
    return (
        <>
            <Backdrop show={props.show} clicked={props.toggleSidePanel}/>
            <div className={classs.join(" ")}>
                <ul>
                    <li onClick={() => {
                        navigate.replace({ 
                            pathname:'/about'
                        });
                        props.toggleSidePanel(false);
                    }}>
                        <div><h1>About</h1></div>
                    </li>
                    <li onClick={() => {
                        navigate.replace({ 
                            pathname:'/work'
                        });
                        props.toggleSidePanel(false);
                    }}>
                        <div><h1>Work</h1></div>
                    </li>
                    <li onClick={() => {
                        navigate.replace({ 
                            pathname:'/work'
                        });
                        props.toggleSidePanel(false);
                    }}>
                        <div><h1>Contact</h1></div>
                    </li>
                </ul>
            </div>
        </>
    )
}