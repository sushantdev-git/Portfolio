import React, { Component } from 'react';
import classes from './Contact.css';
import Footer from '../../components/Footer/Footer';

class Contact extends Component{

    render(){
        return(
            <div className={classes.Contact}>
                <div className={classes.Content}>
                    <a href='mailto:sushantkumar6700@gmail.com'><h1>Let's Connect</h1></a>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;