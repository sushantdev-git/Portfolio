import React from "react";
import classes from './Footer.module.css';
import { SvgIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Link}>
                <a href="https://github.com/sushantdev-git"><SvgIcon onClick={() => console.log()} fontSize="large"><GitHubIcon/></SvgIcon></a>
                <a href="https://www.linkedin.com/in/sushant-mishra-3032b81b5/"><SvgIcon fontSize="large" style={{'marginLeft':'10px'}}><LinkedInIcon/></SvgIcon></a>
            </div>
            <div className={classes.Creator}>
                <p>Designed and developed by</p>
                <p>Sushant Mishra</p>
            </div>
        </div>
    )
}

export default Footer;