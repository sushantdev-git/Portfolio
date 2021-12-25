import React from "react";
import classes from './Header.css'
import {Button} from '../UI/HamburgerButton/HamburgerButton';
import { useHistory } from "react-router";

const Header = (props) => {
    let history = useHistory();
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderContent}>
                <ul>
                    <li onClick={() => history.go(-(history.length - 2))}>About</li>
                    <li onClick={() => history.push({ 
                            pathname:'/work',
                        })}>Work</li>
                    <li onClick={() => history.push({ 
                            pathname:'./contact',
                        })}>Contact</li>
                </ul>
                <Button clicked={props.toggleSidePanel}/>
            </div>
        </div>
    )
}

export default Header;