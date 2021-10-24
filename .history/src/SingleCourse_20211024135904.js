import { Backspace } from "@material-ui/icons";
import React from "react";
import { useHistory, useParams } from "react-router";
import { coursesSidebar } from "./CoursesCategories";

function SingleCourse() {
  const { id } = useParams();
  const history = useHistory()

  return (
    <>
      {coursesSidebar.filter((card) => card?.id === id)}
     {courses}
    </>
  );
}

export default SingleCourse;
