import React from "react";
import classes from "./Skills.css";

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <h1>Skills</h1>
      <h3>Languages</h3>
      <div className={classes.SkillsContent}>
        <div>C++</div>
        <div>Dart</div>
        <div>Java</div>
        <div>Python</div>
        <div>Typescript</div>
        <div>Javascript (ES6+)</div>
      </div>
      <h3>Technologies</h3>
      <div className={classes.SkillsContent}>
        <div>Node.js</div>
        <div>Next.js</div>
        <div>React.js</div>
        <div>Flutter</div>
        <div>Firebase</div>
      </div>
      <h3>Databases</h3>
      <div className={classes.SkillsContent}>
        <div>Oracle</div>
        <div>MongoDB</div>
      </div>
      <h3>Others</h3>
      <div className={classes.SkillsContent}>
        <div>CSS</div>
        <div>Git</div>
        <div>HTML</div>
        <div>GitHub</div>
        <div>Vercel</div>
      </div>
      <h3>Some skills that i'm working on</h3>
      <div className={classes.SkillsContent}>
        <div>Algorithms</div>
        <div>Data Structures</div>
        <div>Machine Learning</div>
      </div>
    </div>
  );
};

export default Skills;
