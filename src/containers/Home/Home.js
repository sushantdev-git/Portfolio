import React, { Component } from "react";
import classes from './Home.css'

import { Intro } from "../../components/Home/Intro/Intro";
import {Footer} from '../../components/Footer/Footer';
import Skills from '../../components/Home/Skills/Skills';
import {motion} from 'framer-motion';
class Home extends Component {

    render(){
        return(
            <div className={classes.Home}>
                <motion.div
                initial={{opacity:0, transform:'translateY(100%)'}}
                animate={{opacity:1,transform:'translateY(0%)'}}
                exit={{opacity:0}}
                transition={{duration:0.55}}
                >
                    <Intro />
                    <Skills />
                    <Footer />
                </motion.div>
            </div>
        );
    }
}

export default Home;