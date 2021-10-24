import React from "react";
import { useParams } from "react-router";
import { coursesSidebar } from "./CoursesCategories";

function SingleCourse() {
  const { id } = useParams();

  return (
    <>
      {coursesSidebar.filter((card) => card?.id === id)}
      <div className='singleCourse'>

          <div className='header'></div>
      </div>
    </>
  );
}

export default SingleCourse;
