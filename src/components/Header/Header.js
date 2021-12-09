import React from "react";
import './Header.css'
import {Button} from '../UI/HamburgerButton/HamburgerButton';
import { useNavigate } from "react-router";

const Header = () => {
    let navigate = useNavigate();
    return (
        <div className="Header">
            <div className="Header-content">
                <ul>
                    <li onClick={() => navigate("./about", { replace: true })}>About</li>
                    <li onClick={() => navigate("./work", { replace: true })}>Work</li>
                    <li onClick={() => navigate("./work", { replace: true })}>Contact</li>
                </ul>
                <Button />
            </div>
        </div>
    )
}

export default Header;