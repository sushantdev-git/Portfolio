import React from 'react';
import classes from './Skills.css';

const Skills = () => {
    return (
        <div className={classes.Skills}>
            <h1>Skills</h1>
            <h3>Some of My Skills</h3>
            <div className={classes.SkillsContent}>
                <div>C++</div>
                <div>CSS</div>
                <div>HTML</div>
                <div>Java</div>
                <div>React</div>
                <div>MySql</div>
                <div>Python</div>
                <div>Flutter</div>
                <div>Blender</div>
                <div>Javascript</div>
            </div>
            <h3>Some skills that i'm working on</h3>
            <div className={classes.LearningSkillsContent}>
                <div>Algorithms</div>
                <div>Data Structures</div>
                <div>Machine Learning</div>
            </div>
        </div>
    )
}

export default Skills;