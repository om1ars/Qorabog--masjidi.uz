import React from "react";
import { useParams } from "react-router";
import { coursesSidebar } from "./CoursesCategories";

function SingleCourse() {
  const { id } = useParams();

  return (
    <>
      {coursesSidebar.filter((card) => card?.id === id)}
      <div><></div>
    </>
  );
}

export default SingleCourse;
