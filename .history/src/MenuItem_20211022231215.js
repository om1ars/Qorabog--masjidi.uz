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
          <h4 className="menuItem__type" style={{}}>
            {type}
            <span>{time}</span>
          </h4>
        </div>
      </p>
    </Fade>
  );
}

export default MenuItem;
