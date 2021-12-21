import React, { Component } from "react";
import classes from './Work.css';
import DisplayCard from "../../components/Work/DisplayCard/DisplayCard";
import Footer from '../../components/Footer/Footer';
import {motion} from 'framer-motion';

class Work extends Component {
    state = {
        projects: [
            {
                title:'Ttooler',
                subDes:'This is a Time management app. | By Me',
                des:'Things you can do - You can add/delete todo, reminder, timetable.You also get notification according to reminder and timetable. You can also see how much time you are spending where according to your timetable.',
                thumb:'images/Ttooler/1.jpg',
                tech:[
                    'Flutter', 'Sqlite',
                ],
                images:[
                    'images/Ttooler/1.jpg',
                    'images/Ttooler/2.jpg',
                    'images/Ttooler/3.jpg',
                    'images/Ttooler/4.jpg',
                ]
            },
            {
                title:'Study-Booth',
                subDes:'This is Social Media Platform. | Done in Group ',
                des:'A social media and classroom based project made for students and working employee for share their ideasand work together. Things you can do - Create a post, like a post, comment on a post, delete a post, deletecomment, reply on comment, refresh your feed, filter your feed, follow/Unfollow a user, search a user.',
                thumb:"https://raw.githubusercontent.com/sushantdeveloper/shopper/master/image/3.jpg",
                tech:[
                    'ReactJs', 'Django',
                ],
            },
            {
                title:'Chatoo',
                subDes:'A chat application. | By Me',
                des:'You can chat in real time.You can also logout and login and switch account.',
                thumb:"https://images.unsplash.com/photo-1601541984851-6779505c272c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                tech:[
                    'Flutter', 'Firebase',
                ],
                images: [
                    "https://raw.githubusercontent.com/sushantdeveloper/chatoo/master/image/3.jpg",
                    "https://raw.githubusercontent.com/sushantdeveloper/chatoo/master/image/2.jpg",
                    "https://raw.githubusercontent.com/sushantdeveloper/chatoo/master/image/4.jpg",
                ],
                github:"https://github.com/sushantdeveloper/chatoo",
            },
            {
                title:'Trade-n-Build',
                subDes:'A platform to trade | Done in Group',
                des:'You can see stock price of different companies, compare them and buy them.',
                thumb:"https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                tech:[
                    'HTML', 'CSS', 'JQuery',
                ],
                github:"https://github.com/sushantdeveloper/Trande-n-Build",
                link:"https://sushantdeveloper.github.io/Trande-n-Build/",
            },
        ]
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){

        let displayCards = null;

        displayCards = this.state.projects.map((project,i) => <DisplayCard ind={i} key={i} {...project}/>)
        return(
            <div className={classes.Work}>
                <motion.div
                initial={{opacity:0, transform:'translateY(100%)'}}
                animate={{opacity:1,transform:'translateY(0%)'}}
                exit={{opacity:0}}
                transition={{duration:0.55}}
                >
                    <h1>Some of my works</h1>
                    {displayCards}
                </motion.div>
                <Footer />
            </div>
        )
    }
}

export default Work;