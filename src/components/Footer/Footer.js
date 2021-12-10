import React from "react";
import classes from './Footer.css';
import { SvgIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Link}>
                <SvgIcon onClick={() => console.log()} fontSize="large"><GitHubIcon/></SvgIcon>
                <SvgIcon fontSize="large" style={{'marginLeft':'10px'}}><LinkedInIcon/></SvgIcon>
            </div>
        </div>
    )
}