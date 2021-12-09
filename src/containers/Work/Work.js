import React, { Component } from "react";
import './Work.css';
import { DisplayCard } from "../../components/Work/DisplayCard/DisplayCard";
class Work extends Component {
    state = {
        projects: [
            {
                title:'Tooler',
                subDes:'This is a Time management app. | By Me',
                des:'Things you can do - You can add/delete todo, reminder, timetable.You also get notification according to reminder and timetable. You can also see how much time you are spending where according to your timetable.',
                thumb:"https://avatars.githubusercontent.com/u/70423224?v=4",
                tech:[
                    'Flutter', 'Sqlite',
                ]
            },
            {
                title:'StudyBooth',
                subDes:'This is Social Media Platform. | Done in Group ',
                des:'A social media and classroom based project made for students and working employee for share their ideasand work together. Things you can do - Create a post, like a post, comment on a post, delete a post, deletecomment, reply on comment, refresh your feed, filter your feed, follow/Unfollow a user, search a user.',
                thumb:"https://avatars.githubusercontent.com/u/70423224?v=4",
                tech:[
                    'ReactJs', 'Django',
                ]
            },
        ]
    }

    render(){

        let displayCards = null;

        displayCards = this.state.projects.map((project,i) => <DisplayCard ind={i} key={i} {...project}/>)
        return(
            <div className="Work">
                <h1>Some of my works</h1>
                {displayCards}
            </div>
        )
    }
}

export default Work;