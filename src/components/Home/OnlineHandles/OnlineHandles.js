import React from "react";
import classes from "./OnlineHandles.css";

const OnlineHandle = () => {
  return (
    <div className={classes.Skills}>
      <h1>Online Profiles</h1>
      <p style={{ lineHeight: "50px" }}>
        <i>Click to visit profiles</i>
      </p>
      <div className={classes.SkillsContent}>
        <div>
          <a href="https://leetcode.com/sushantk_04/">LeetCode</a>
        </div>
        <div>
          <a href="https://codeforces.com/profile/Sushant_Mishra">Codeforces</a>
        </div>
      </div>
    </div>
  );
};

export default OnlineHandle;
