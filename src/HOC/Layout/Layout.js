import React, { Component } from "react";
import Header from "../../components/Header/Header";
import classes from './Layout.css';
import {SidePanel} from '../../components/UI/SidePanel/SidePanel';
import ImageViewer from '../../components/UI/ImageViewer/ImageViewer';
import PdfViewer from '../../components/UI/PdfViewer/PdfViewer';

class Layout extends Component {

    state = {
        isSidePanelVisible:false,
    }

    setSidePanel = (val) => {
        this.setState({
            isSidePanelVisible:val,
        })
    }


    render(){

        return(
            <div className={classes.Layout}>
                <Header toggleSidePanel={() => this.setSidePanel(!this.state.isSidePanelVisible)}/>
                {this.props.children}
                <SidePanel toggleSidePanel={this.setSidePanel} show={this.state.isSidePanelVisible}/>
                <ImageViewer/>
                <PdfViewer />
            </div>
        )
    }
}

export default Layout;