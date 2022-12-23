import { useEffect, useRef, useState } from "react";
import classes from "./ExperienceCard.module.css";
import IconAddress from "../../../IconAddress";

const ExperienceCard = ({ experience, upc, lwc }) => {
  const cRef = useRef(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    setHeight(cRef.current.clientHeight + 40 + "px");
  }, [cRef]);

  return (
    <div className={classes.ExperienceCard}>
      <div className={classes.Connector} style={{ height: `${height}` }}>
        <div
          className={classes.LineUP}
          style={{ border: `${upc ? "auto" : "none"}` }}
        ></div>
        <div className={classes.Circle}></div>
        <div
          className={classes.LineDOWN}
          style={{ border: `${lwc ? "auto" : "none"}` }}
        ></div>
      </div>
      <div className={classes.Line}></div>
      <div className={classes.Container} ref={cRef}>
        <h2>
          {experience.profile}
          <span className={classes.Company}>{"@" + experience.company}</span>
        </h2>
        <h3>{experience.duration}</h3>
        <div className={classes.TechStack}>
          {experience.techStack.map((tech) => {
            return (
              <div key={tech} className={classes.Tech}>
              <img src={IconAddress[tech] ?? "icons/algo.png"} /> {tech} 
              </div>
            );
          })}
        </div>
        <ul>
          {experience.description.map((desc) => {
            return (
              <li key={desc}>
                <p>{desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
