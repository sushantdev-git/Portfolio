import React, { Component } from "react";
import './Home.css'

import { Intro } from "../../components/Home/Intro/Intro";

class Home extends Component {

    render(){
        return(
            <div className="Home">
                <Intro />
            </div>
        );
    }
}

export default Home;