import React, { Component } from "react";
import Header from "../../components/Header/Header";
import classes from './Layout.module.css';
import {SidePanel} from '../../components/UI/SidePanel/SidePanel';
import ImageViewer from '../../components/UI/ImageViewer/ImageViewer';
import PdfViewer from '../../components/UI/PdfViewer/PdfViewer';

class Layout extends Component {

    state = {
        isSidePanelVisible:false,
        child:null,
        LayoutRef:React.createRef(),
    }

    setSidePanel = (val) => {
        this.setState({
            isSidePanelVisible:val,
        })
    }

    shouldComponentUpdate(nextProps){
        let oldKeys = this.props.children.props.children.key;
        let newKeys = nextProps.children.props.children.key;
        if(oldKeys !== newKeys) this.state.LayoutRef.current.scrollTo({top:0, smooth:true});
        //scrolling to top if children is changed.
        return true;
    }
    

    render(){

        return(
            <div className={classes.Layout} ref={this.state.LayoutRef}>
                <Header toggleSidePanel={() => this.setSidePanel(!this.state.isSidePanelVisible)}/>
                <div className={classes.MyChild}>{this.props.children}</div>
                <SidePanel toggleSidePanel={this.setSidePanel} show={this.state.isSidePanelVisible}/>
                <ImageViewer/>
                <PdfViewer />
            </div>
        )
    }
}

export default Layout;