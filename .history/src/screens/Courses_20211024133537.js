import { BookOutlined, Tv } from "@material-ui/icons";
import React from "react";
import Categories from "./Categories";
import "./Courses.css";
// import { coursesSideb  ar } from "../CoursesCategories";
import { Link } from "react-router-dom";

export const Courses = ({categoryData}) => {
  return (
    <div style={{ display: "flex" }} className="courses">
      <div className="sidebar" style={{}}>
        <img src="" />
        {coursesSidebar.map(({ id, title, icon }) => (
          <Link to={`/singlecourse/${id}`}>
            <div className="sidebar__item">
              <span>
                <BookOutlined />
              </span>
              <span>{title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="category__container">
        <Categories />
      </div>
    </div>
  );
};
