import React from "react";
import classes from "./Header.module.css";
import { Button } from "../UI/HamburgerButton/HamburgerButton";
import { useNavigate, useLocation } from "react-router";

const Header = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  return (
    <div className={classes.Header}>
      <div className={classes.HeaderContent}>
        <ul>
          <li
            onClick={() => navigate("/about")}
            className={location.pathname == "/about" ? classes.Active : null}
          >
            About
          </li>
          <li
            onClick={() => navigate("/projects")}
            className={location.pathname == "/projects" ? classes.Active : null}
          >
            Projects
          </li>
          <li
            onClick={() => navigate("/experience")}
            className={location.pathname == "/experience" ? classes.Active : null}
          >
            Experience
          </li>
          <li
            onClick={() => navigate("/contact")}
            className={location.pathname == "/contact" ? classes.Active : null}
          >
            Contact
          </li>
        </ul>
        <Button clicked={props.toggleSidePanel} />
      </div>
    </div>
  );
};

export default Header;
