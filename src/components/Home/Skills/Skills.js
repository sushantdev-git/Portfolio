import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <h1>Skills</h1>
      <h3>Languages</h3>
      <div className={classes.SkillsContent}>
        <div>
          C++ <img src="icons/cp.png" alt="none" />
        </div>
        <div>
          Dart <img src="icons/dart.png" alt="none" />
        </div>
        <div>
          Java <img src="icons/java.png" alt="none" />
        </div>
        <div>
          Python <img src="icons/python.png" alt="none" />
        </div>
        <div>
          Typescript <img src="icons/typescript.png" alt="none" />
        </div>
        <div>
          Javascript (ES6+) <img src="icons/javascript.png" alt="none" />
        </div>
      </div>
      <h3>Technologies</h3>
      <div className={classes.SkillsContent}>
        <div>
          Node.js <img src="icons/nodejs.png" alt="none" />
        </div>
        <div>
          Next.js <img src="icons/reactjs.png" alt="none" />
        </div>
        <div>
          React.js <img src="icons/reactjs.png" alt="none" />
        </div>
        <div>
          Flutter <img src="icons/flutter.png" alt="none" />
        </div>
        <div>
          Firebase <img src="icons/firebase.png" alt="none" />
        </div>
      </div>
      <h3>Databases</h3>
      <div className={classes.SkillsContent}>
        <div>
          Oracle <img src="icons/oracle.png" alt="none" />
        </div>
        <div>
          MongoDB <img src="icons/mongodb.png" alt="none" />
        </div>
      </div>
      <h3>Others</h3>
      <div className={classes.SkillsContent}>
        <div>
          CSS <img src="icons/css.png" alt="none" />
        </div>
        <div>
          Git <img src="icons/git.png" alt="none" />
        </div>
        <div>
          HTML <img src="icons/html.png" alt="none" />
        </div>
        <div>
          GitHub <img src="icons/github.png" alt="none" />
        </div>
        <div>
          Vercel <img src="icons/vercel.png" alt="none" />
        </div>
      </div>
      <h3>Some skills that i'm working on</h3>
      <div className={classes.SkillsContent}>
        <div>
          Algorithms <img src="icons/algo.png" alt="none" />
        </div>
        <div>
          Data Structures <img src="icons/datastructure.png" alt="none" />
        </div>
        <div>
          Machine Learning <img src="icons/ml.png" alt="none" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
