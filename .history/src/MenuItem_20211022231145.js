import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
import { Fade } from "react-awesome-reveal";

function MenuItem({ type, image, time }) {
  return (
    <Fade>
      <p className="menuItem">
        <img
          src={image}
          alt=""
          className="menuItem__image"
          style={{ height: 95, width: 95 }}
        />
        <div className="time">
          <span className="menuItem__type">{type}</span>
          <span>{time}</span>
        </div>
      </p>
    </Fade>
  );
}

export default MenuItem;