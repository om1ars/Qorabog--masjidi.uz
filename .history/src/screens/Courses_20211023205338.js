import { Tv } from "@material-ui/icons";
import React from "react";
import Categories from "./Categories";
import "./Courses.css";

export const Courses = () => {
  return (
    <div style={{display: 'flex', }}>
      <div className="sidebar" style={{}}>
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
      <div className='category__container'></div>
      <Categories />
    </div>
  );
};
