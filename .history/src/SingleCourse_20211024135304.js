import React from "react";
import { useParams } from "react-router";
import { coursesSidebar } from "./CoursesCategories";

function SingleCourse() {
  const { id } = useParams();

  return (
    <>
      <div>{coursesSidebar.filter((card) => card?.id === id).)}</div>
    </>
  );
}

export default SingleCourse;
