import React, { Component } from "react";
import classes from "./Work.module.css";
import DisplayCard from "../../components/Work/DisplayCard/DisplayCard";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

class Work extends Component {
  state = {
    projects: [
      {
        title: "CF Daily",
        subDes: "A Daily Challenge Website. | Done in Group ",
        des: "This website daily picks a random problem for each rank on Codeforces from Codeforces' problem set. This helps the user learn new topics in programming and maintain consistency in problem solving.",
        thumb: "images/Ttooler/1.jpg",
        tech: ["ReactJs", "NodeJs", "MongoDB", "Azure"],
        images: [],
        link:"https://cf-daily.vercel.app/"
      },
      {
        title: "Ttooler",
        subDes: "This is a Time management app. | By Me",
        des: "Things you can do - You can add/delete todo, reminder, timetable.You also get notification according to reminder and timetable. You can also see how much time you are spending where according to your timetable.",
        thumb: "images/Ttooler/1.jpg",
        tech: ["Flutter", "Sqlite"],
        github: "https://github.com/sushantdev-git/Ttooler",
        images: [
          "images/Ttooler/1.jpg",
          "images/Ttooler/2.jpg",
          "images/Ttooler/3.jpg",
          "images/Ttooler/4.jpg",
        ],
      },
      {
        title: "Study-Booth",
        subDes: "This is Social Media Platform. | Done in Group ",
        des: "A social media and classroom based project made for students and working employee for share their ideasand work together. Things you can do - Create a post, like a post, comment on a post, delete a post, deletecomment, reply on comment, refresh your feed, filter your feed, follow/Unfollow a user, search a user, chat with a user, create group, add user in group.",
        thumb: "images/StudyBooth/3.png",
        tech: ["ReactJs", "Django"],
        link: "https://study-booth.vercel.app",
        images: [
          "images/StudyBooth/1.png",
          "images/StudyBooth/2.png",
          "images/StudyBooth/3.png",
          "images/StudyBooth/4.png",
        ],
      },
      {
        title: "Resume Builder",
        subDes: "A Platform to build Resume | Done in Group",
        des: "You can create you own customized resume in few minutes",
        thumb: "",
        tech: ["React", "Redux"],
        github: "https://github.com/sushantdev-git/Resume-Builder",
        link: "https://resume-builder-omega.vercel.app/",
        images: [],
      },
      {
        title: "Tournaverse",
        subDes: "An app to contest in E Sports | By Me",
        des: "There are two types of users in this app, one is player and another is organizer. You can choose to be any of them, and use the app. The Player are the users that are going to participate in the some contest, and organizer is going to create some contest. Organizer have the resposibility to successfully organize a contest and after the contest the winners will get the prize money from the Pool of money.",
        thumb: "",
        tech: ["Flutter", "NodeJs", "MongoDB"],
        github: "https://github.com/sushantdev-git/Tournaverse",
        images: [],
      },
      {
        title: "Chatoo",
        subDes: "A chat application. | By Me",
        des: "You can chat in real time.You can also logout and login and switch account.",
        thumb: "images/Chatoo/3.jpg",
        tech: ["Flutter", "Firebase"],
        images: [
          "images/Chatoo/1.jpg",
          "images/Chatoo/2.jpg",
          "images/Chatoo/3.jpg",
          "images/Chatoo/4.jpg",
        ],
        github: "https://github.com/sushantdev-git/chatoo",
      },
      {
        title: "Trade-&-Build",
        subDes: "A platform to trade | Done in Group",
        des: "You can see stock price of different companies, compare them and buy them.",
        thumb: "images/TradenBuild/1.png",
        tech: ["HTML", "CSS", "JQuery"],
        github: "https://github.com/sushantdev-git/Trande-n-Build",
        link: "https://sushantdev-git.github.io/Trande-n-Build/",
        images: ["images/TradenBuild/1.png", "images/TradenBuild/2.png"],
      },
    ],
  };

  render() {
    let displayCards = null;

    displayCards = this.state.projects.map((project, i) => (
      <DisplayCard ind={i} key={i} {...project} />
    ));
    return (
      <div className={classes.Work} key="2">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1>Some of my Projects</h1>
          <div className={classes.displayCards}>{displayCards}</div>
        </motion.div>
        <Footer />
      </div>
    );
  }
}

export default Work;
