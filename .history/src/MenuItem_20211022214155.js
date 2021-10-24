import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
import { Fade } from "react-awesome-reveal";

function MenuItem({ type, image }) {
  return (
    <Fade>
      <p className="menuItem">
        <img src={image} alt="" className="menuItem__image" />
        <div></div>
      </p>
    </Fade>
  );
}

export default MenuItem;
