import React from "react";
import classes from './Header.css'
import {Button} from '../UI/HamburgerButton/HamburgerButton';
import { useHistory} from "react-router";

import {navigate} from '../../router_fxn';

const Header = (props) => {
    let history = useHistory();
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderContent}>
                <ul>
                    <li onClick={() => navigate('/about', history)}>About</li>
                    <li onClick={() => navigate('/work', history)}>Work</li>
                    <li onClick={() => navigate('/contact', history)}>Contact</li>
                </ul>
                <Button clicked={props.toggleSidePanel}/>
            </div>
        </div>
    )
}

export default Header;