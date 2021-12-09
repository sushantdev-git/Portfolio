import React, { Component } from "react";
import Header from "../../components/Header/Header";
import './Layout.css';
import { Footer } from "../../components/Footer/Footer";
class Layout extends Component {

    render(){
        return(
            <div className="Layout">
                <Header/>
                {this.props.children}
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Layout;