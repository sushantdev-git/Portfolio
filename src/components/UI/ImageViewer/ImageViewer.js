import React, {Component} from 'react';
import classes from './ImageViewer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { SvgIcon } from '@mui/material';
import {connect} from 'react-redux';
import ImageLoading from '../ImageLoading/ImageLoading';

class ImageViewer extends Component {

    state = {
        index:0,
        imageLoading:true,
        imgref: React.createRef(null)
    }

    setIndex = (val) => {
        if(val < 0 || val >= this.props.images.length) return;

        this.setState({
            index:val,
            imageLoading:true,
        })
    }


    onImageLoad = (val) => { 
        // console.log("image loaded called", val)
        this.setState({imageLoading: val})
    }

    render(){

        if(this.props.images.length === 0 && this.state.index !== null){
            this.setState({
                index:null,
            })
        } 
        
        if(this.props.images.length > 0 && this.state.index == null){
            this.setState({
                index:0,
            })
        } 
    
        let classs = [classes.ImageViewer];
        if(this.props.show) classs.push(classes.Show);
    

        return (
            <>
                <Backdrop show={this.props.show} clicked = {this.props.close}/>
                <div className={classs.join(" ")}>
    
                    {this.state.index != null && this.state.index > 0 ? 
                        <button onClick={() => {
                            this.setIndex(this.state.index-1)
                        }} className={classes.Prev}>
                            <SvgIcon > <ArrowBackIosNewIcon /> </SvgIcon>
                        </button> 
                    : null}
    
                    {this.state.index != null ? 
                        <>
                            <img 
                                src={this.props.images[this.state.index]} 
                                ref={this.state.imgref} alt="" 
                                style={{display:`${!this.state.imageLoading ? 'block' : 'none' }`}} 
                                onLoad={() => this.onImageLoad(false)} 
                                // onLoadStart={() => this.onImageLoad(true)}
                            />
                            {this.state.imageLoading ?  <ImageLoading width="60%" height="80%"/> : null}
                        </>
                    : <p>No image is avaible at this time</p>}
    
    
                    {this.state.index != null && this.state.index < this.props.images.length-1 ?
                        <button onClick={() => {
                            this.setIndex(this.state.index+1)
                        }}  className={classes.Next}>
                            <SvgIcon> <ArrowForwardIosIcon /> </SvgIcon>
                        </button> 
                    : null}
    
                </div>
            </>
        )
    }
}

const mapStateToprops = state => {
    return{
        show: state.viewer.imgVisible,
        images: state.viewer.images,
    }
}

const mapDispatchToprops = dispatch => {
    return {
        close: () => dispatch({
            type:'IMG_HIDDEN',
            images:[],
        })
    }
}

export default connect(mapStateToprops,mapDispatchToprops)(ImageViewer);