import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./Intro.module.css";

export const Intro = () => {
  const name = "Sushant";
  const [displaytext, setDisplayText] = useState("");

  const runNamLoop = async () => {
    let i = 0;
    while (i < name.length) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setDisplayText(name.slice(0, i + 1));
      i++;
      if (i === name.length) i = 0;
    }
  };
  useEffect(() => {
    runNamLoop();
  }, []);

  return (
    <div className={classes.Intro}>
      <div className={classes.Text}>
        <h3>Hi there 👋, I'm</h3>
        <div style={{ height: "100px" }}>
          <h1>{displaytext}👨‍💻</h1>
        </div>
        <div className={classes.space20}></div>
        <h2>I'm an aspiring Software Engineer 🤳</h2>
        <div className={classes.space40}></div>
        <p>
        From my childhood, I was always interested in how things work, what is the mechanism behind them. From there, I fell in love with exploring and creating new things. After some time, I was introduced to programming, and it allows me to bring my ideas to life. After that, I learned many programming languages and technologies to build new things. <i>Currently, I'm working on  MERN stack</i> and hoping to learn more to get constant dopamine hits 🚀🚀
        </p>
      </div>
      <div className={classes.ImageContainer}>
        <div className={classes.Image}>
          <img
            src="https://avatars.githubusercontent.com/u/70423224?v=4"
            alt="none"
          />
          <div className={classes.ImageBoundary}></div>
        </div>
      </div>
    </div>
  );
};
