import { Tv } from "@material-ui/icons";
import React from "react";
import Categories from "./Categories";
import "./Courses.css";

export const Courses = () => {
  return (
    <div style={{}}>
      <div className="sidebar" style={{flex: '.05'}}>
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
          <span>Kurslar</span>
        </div>
      </div>
      <Categories />
    </div>
  );
};
