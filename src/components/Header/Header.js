import React from "react";
import classes from './Header.css'
import {Button} from '../UI/HamburgerButton/HamburgerButton';
import { useHistory } from "react-router";

const Header = (props) => {
    let navigate = useHistory();
    return (
        <div className={classes.Header}>
            <div className={classes.HeaderContent}>
                <ul>
                    <li onClick={() => navigate.push({
                            pathname: '/about',
                        })}>About</li>
                    <li onClick={() => navigate.push({ 
                            pathname:'/work',
                        })}>Work</li>
                    <li onClick={() => navigate.push({ 
                            pathname:'./work'
                        })}>Contact</li>
                </ul>
                <Button clicked={props.toggleSidePanel}/>
            </div>
        </div>
    )
}

export default Header;