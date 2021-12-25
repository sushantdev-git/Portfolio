import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './SidePanel.css';
import { useHistory, useLocation } from "react-router";
import {navigate} from '../../../router_fxn';

export const SidePanel = (props) => {

    let history = useHistory();

    let classs = [classes.SidePanel];
    if(props.show) classs.push(classes.Show);

    let fxn = () => props.toggleSidePanel(false);


    return (
        <>
            <Backdrop show={props.show} clicked={props.toggleSidePanel}/>
            <div className={classs.join(" ")}>
                <ul>
                    <li onClick={() => navigate('/about', history, fxn )}>
                        <div><h1>About</h1></div>
                    </li>
                    <li onClick={() => navigate('/work', history, fxn)}>
                        <div><h1>Work</h1></div>
                    </li>
                    <li onClick={() => navigate('/contact', history, fxn)}>
                        <div><h1>Contact</h1></div>
                    </li>
                </ul>
            </div>
        </>
    )
}