import React from "react";
import classes from './DisplayCard.css'
import { useState, useRef } from "react";

import { SvgIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {connect} from 'react-redux';

const DisplayCard = (props) => {
    
    let [showDetail, setShowDetail] = useState(false);

    let content = useRef(null);

    let [DetailHeight, setDetailHeight] = useState('0px');

    const showDetailClicked = () => {
        setShowDetail(!showDetail);
        setDetailHeight(!showDetail ? `${content.current.scrollHeight}px` :'0px' );
    }
    
    let text = (<div className={classes.Text}>
        <h1>{props.title}</h1>
        <h3>{props.subDes}</h3>

        <div className={classes.Description} ref={content} style={{'height':`${DetailHeight}`}}>
            <p>{props.des}</p>
        </div>

        <button onClick={showDetailClicked}>{!showDetail ? "Show Detail":"Hide Detail"}</button>

        <div className={classes.Tech}>
            <ul>
                {props.tech.map((tName,i) => <li key={i}>{tName}</li>)}
            </ul>
        </div>
        <div className={classes.Link}>
            <SvgIcon onClick={() => console.log()} fontSize="medium" style={{'marginRight':'15px'}}><GitHubIcon/></SvgIcon>
            <SvgIcon onClick={() => console.log()} fontSize="medium"><OpenInNewIcon/></SvgIcon>
        </div>
        <button onClick={() => props.showImg(props.images)}>See More Images ➡️</button>
    </div>);

    let image = (
        <div className={classes.Image}>
            <img src={props.thumb} alt=""/>
        </div>
    );

    return(
        <div className={classes.DisplayCard}>
            <div className={classes.Info}>
                {props.ind % 2 === 0 ? text :image}
                {props.ind % 2 === 0 ? image:text}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        showImg: (images) => dispatch({
            type:'VISIBLE',
            images:images ? images : [],
        })
    }
}


export default connect(null, mapDispatchToProps)(DisplayCard)