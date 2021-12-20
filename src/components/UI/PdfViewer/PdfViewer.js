import React from 'react';
import classes from './PdfViewer.css';
import Backdrop from '../Backdrop/Backdrop';
import {connect} from 'react-redux';

const PdfViewer = (props) => {

    let classs = [classes.PdfViewer];
    if(props.show) classs.push(classes.Show);

    return (
        <>
            <Backdrop show={props.show} clicked = {props.close}/>
            <div className={classs.join(" ")}>
                {props.pdf ? <object data={props.pdf} type="application/pdf" width="80%" height="80%"> </object> : <p>No Content available</p>}
            </div>
        </>
    );
}

const mapStateToprops = state => {
    return {
        pdf: state.viewer.pdf,
        show: state.viewer.pdfVisible,
    }
}

const mapDispatchToprops = dispatch => {
    return {
        close: () => dispatch({
            type: 'PDF_HIDDEN',
        })
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(PdfViewer);