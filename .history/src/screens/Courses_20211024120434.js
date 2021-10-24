import { Tv } from "@material-ui/icons";
import React from "react";
import Categories from "./Categories";
import "./Courses.css";
import { coursesSidebar } from "../CoursesCategories";

export const Courses = () => {
  return (
    <div style={{ display: "flex" }} className='courses'>
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
      <div className="category__container">
        <Categories />
      </div>
    </div>
  );
};
