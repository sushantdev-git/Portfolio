import ExperienceCard from "../../components/Experience/ExperienceCard/ExperienceCard";
import classes from "./Experience.module.css";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";

const Experience = () => {

    const experience = [
        {
            profile: "Upcoming Software Development Intern",
            company: "STGI",
            duration: "Jan 2023 - Sep 2023",
            techStack: ["VueJs", "Django", "AWS"],
            description: [
                "Excieted to learn new stuff."
            ],
        },
        {
            profile: "Co-Founder | Software Developer Engineer ",
            company: "Shopoff",
            duration: "August 2022 - Present",
            techStack: ["Flutter", "NodeJs", "MongoDB", "AWS", "Firebase", "GCP"],
            description: [
                "Developed the app in Flutter.",
                "Developed the backend in Node JS. Implemented core business logic.",
                "Integreated the app with the backend.",
            ],
        },
        {
            profile: "Software Development Intern",
            company: "Solruf",
            duration: "May 2022 - Aug 2022",
            techStack: ["ReactJs", "NodeJs"],
            description: [
                "Developed reusable react components.",
                "Developed responsive UI for mobile devices.",
                "Developed a Microservice in node js to generate Invoice.",
            ],
        },
    ];
  return (
    <div className={classes.Experience}>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(100%)" }}
        animate={{ opacity: 1, transform: "translateY(0%)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55 }}
      >
        {experience.map((exp, ind) => {
            return <ExperienceCard key={exp.profile} experience={exp} upc={ind > 0} lwc={ind < experience.length-1}/>
        })}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Experience;
