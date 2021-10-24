import { Tv } from "@material-ui/icons";
import React from "react";
import "./Courses.css";

export const Courses = () => {
  return (
    <div>
      <div className="sidebar">
        <img src="" />
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>Kurslar</span>
        </div>
        <div className="sidebar__item">
          <span>
            <Tv />
          </span>
          <span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FuM8ePjNvuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          </span>
        </div>
      </div>
    </div>
  );
};
