import React from "react";
import classes from "./DisplayCard.module.css";
import { useState, useRef, useEffect } from "react";

import { SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const DisplayCard = (props) => {
  let [showDetail, setShowDetail] = useState(false);

  let content = useRef(null);
  let mainBox = useRef(null);

  let [DetailHeight, setDetailHeight] = useState("0px");

  const showDetailClicked = () => {
    setShowDetail(!showDetail);
    setDetailHeight(!showDetail ? `${content.current.scrollHeight}px` : "0px");
  };

  let text = (
    <div className={classes.Text}>
      <h1>{props.title}</h1>
      <h3>{props.subDes}</h3>

      <div
        className={classes.Description}
        ref={content}
        style={{ height: `${DetailHeight}` }}
      >
        <p>{props.des}</p>
      </div>

      <button onClick={showDetailClicked}>
        {!showDetail ? "Show Detail" : "Hide Detail"}
      </button>

      <div className={classes.Tech}>
        <ul>
          {props.tech.map((tName, i) => (
            <li key={i}>{tName}</li>
          ))}
        </ul>
      </div>
      <div className={classes.Link}>
        {props.github ? (
          <a href={props.github}>
            <SvgIcon
              onClick={() => console.log()}
              fontSize="medium"
              style={{ marginRight: "15px" }}
            >
              <GitHubIcon />
            </SvgIcon>
          </a>
        ) : null}
        {props.link ? (
          <a href={props.link}>
            <SvgIcon onClick={() => console.log()} fontSize="medium">
              <OpenInNewIcon />
            </SvgIcon>
          </a>
        ) : null}
      </div>
      <button onClick={() => props.showImg(props.images)}>See Images ➡️</button>
    </div>
  );

  let image = (
    <div className={classes.Image}>
      <img src={props.thumb} alt="" />
    </div>
  );

  useEffect(() => {
    if (mainBox.current.clientWidth >= 600) {
      setShowDetail(true);
      setDetailHeight(
        !showDetail ? `${content.current.scrollHeight}px` : "0px"
      );
    }
  }, [mainBox]);

  console.log(mainBox);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className={classes.DisplayCard} ref={mainBox}>
        <div className={classes.Info}>
          {/* {props.ind % 2 === 0 ? text :image}
                    {props.ind % 2 === 0 ? image:text} */}
          {text}
          {/* {image} */}
        </div>
      </div>
    </motion.div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showImg: (images) =>
      dispatch({
        type: "IMG_VISIBLE",
        images: images ? images : [],
      }),
  };
};

export default connect(null, mapDispatchToProps)(DisplayCard);
