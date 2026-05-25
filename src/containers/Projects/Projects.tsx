import React from "react";
import DisplayCard from "../../components/Work/DisplayCard/DisplayCard";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subDes: string;
  des: string;
  thumb: string;
  tech: string[];
  github?: string;
  link?: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "Geospatial Ride-Sharing Platform",
    subDes: "Distributed Systems Project | Go, Redis, Kafka",
    des: "Designed a microservices-based REST API for ride estimation and driver matching, capable of handling 100k transactions per second. Implemented Redis Geospatial (GEOSEARCH) to facilitate real-time, sub-millisecond nearest-driver matching. Developed a Geo-Sharding strategy to localize driver-rider matching, reducing cross-node latency and increasing request performance. Engineered a Distributed Locking mechanism in Redis to prevent race conditions during ride acceptance, and implemented Kafka-based queuing to buffer demand during peak traffic.",
    thumb: "",
    tech: ["Go", "Redis", "Kafka"],
    github: "https://github.com/sushantdev-git",
    images: [],
  },
  {
    title: "Autonomous Portfolio Intelligence Agent",
    subDes: "AI & LLM Project | Python, LangGraph, Bedrock",
    des: "Engineered a multi-agent system using LangGraph to automate financial risk analysis; implemented stateful loops to transition from data extraction to risk assessment. Implemented tool-augmented LLM function calling to interface with live Finance APIs, grounding model reasoning in real-time market data. Optimized the analysis workflow using Redis-based caching, reducing API latency for recurring portfolio queries by 40%.",
    thumb: "",
    tech: ["Python", "LangGraph", "Redis"],
    github: "https://github.com/sushantdev-git",
    images: [],
  },
  {
    title: "Ttooler",
    subDes: "Time Management Mobile App | Solo Project",
    des: "Things you can do - You can add/delete todo, reminder, timetable. You also get notification according to reminder and timetable. You can also see how much time you are spending where according to your timetable.",
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
    title: "Chatoo",
    subDes: "Real-Time Chat Application | Solo Project",
    des: "A real-time messaging application supporting instant chats, dynamic user statuses, account creation, and smooth user profile switching.",
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
];

const Work: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto mt-10 flex flex-col gap-8 md:mt-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full flex flex-col gap-8"
      >
        <div className="text-center flex flex-col gap-2 mb-2">
          <h1 className="text-3xl font-heading font-extrabold tracking-tight">Engineering Curriculum</h1>
          <p className="text-[1.1rem] text-muted">Explore some of the full-stack web platforms and native mobile applications I've engineered.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full">
          {projects.map((project, i) => (
            <DisplayCard key={i} {...project} />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Work;
