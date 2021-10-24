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
        {coursesSidebar.map(({id, title, icon}) => (
          <>
        ))}
      </div>
      <div className="category__container">
        <Categories />
      </div>
    </div>
  );
};
