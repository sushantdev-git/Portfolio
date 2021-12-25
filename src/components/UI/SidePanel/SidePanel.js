import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './SidePanel.css';
import { useHistory } from "react-router";

export const SidePanel = (props) => {

    let history = useHistory();


    let classs = [classes.SidePanel];
    if(props.show) classs.push(classes.Show);

    const navigate = (path, type)=> {
        if(type === 'push') {
            history.push({ 
                pathname:path
            });
        }
        console.log(history)
        props.toggleSidePanel(false);

    }
    return (
        <>
            <Backdrop show={props.show} clicked={props.toggleSidePanel}/>
            <div className={classs.join(" ")}>
                <ul>
                    <li onClick={() => {
                        history.go(-(history.length - 2));
                        props.toggleSidePanel(false);
                    }}>
                        <div><h1>About</h1></div>
                    </li>
                    <li onClick={() => navigate('/work', 'push')}>
                        <div><h1>Work</h1></div>
                    </li>
                    <li onClick={() => navigate('/contact', 'push')}>
                        <div><h1>Contact</h1></div>
                    </li>
                </ul>
            </div>
        </>
    )
}