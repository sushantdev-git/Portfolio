import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './SidePanel.module.css';
import { useNavigate } from 'react-router-dom';

export const SidePanel = (props) => {

    const navigate = useNavigate();

    let classs = [classes.SidePanel];
    if(props.show) classs.push(classes.Show);

    let fxn = () => props.toggleSidePanel(false);


    return (
        <>
            <Backdrop show={props.show} clicked={props.toggleSidePanel}/>
            <div className={classs.join(" ")}>
                <ul>
                    <li onClick={() => {
                        navigate('/about')
                        fxn();
                    }}>
                        <div><h1>About</h1></div>
                    </li>
                    <li onClick={() => {
                        navigate('/work')
                        fxn();
                    }}>
                        <div><h1>Work</h1></div>
                    </li>
                    <li onClick={() => {
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