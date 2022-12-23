import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './SidePanel.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const SidePanel = (props) => {

    const navigate = useNavigate();
    let location = useLocation();

    let classs = [classes.SidePanel];
    if(props.show) classs.push(classes.Show);

    let fxn = () => props.toggleSidePanel(false);


    return (
        <>
            <Backdrop show={props.show} clicked={props.toggleSidePanel}/>
            <div className={classs.join(" ")}>
                <ul>
                    <li className={location.pathname == "/about" ? classes.Active : null} onClick={() => {
                        navigate('/about')
                        fxn();
                    }}>
                        <div><h1>About</h1></div>
                    </li>
                    <li className={location.pathname == "/projects" ? classes.Active : null} onClick={() => {
                        navigate('/projects')
                        fxn();
                    }}>
                        <div><h1>Projects</h1></div>
                    </li>
                    <li className={location.pathname == "/experience" ? classes.Active : null} onClick={() => {
                        navigate('/experience')
                        fxn();
                    }}>
                        <div><h1>Experience</h1></div>
                    </li>
                    <li className={location.pathname == "/contact" ? classes.Active : null} onClick={() => {
                        navigate('/contact')
                        fxn();
                    }}>
                        <div><h1>Contact</h1></div>
                    </li>
                </ul>
            </div>
        </>
    )
}