import React from "react";
import classes from "./Header.module.css";
import { Button } from "../UI/HamburgerButton/HamburgerButton";
import { useNavigate } from "react-router";

const Header = (props) => {
  let navigate = useNavigate();
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderContent}>
        <ul>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/work")}>Projects</li>
          {/* <li onClick={() => navigate("/work", history)}>Experience</li> */}
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
        <Button clicked={props.toggleSidePanel} />
      </div>
    </div>
  );
};

export default Header;
