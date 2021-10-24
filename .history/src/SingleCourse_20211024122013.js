import React from "react";
import { useParams } from "react-router";

function SingleCourse({ coursesSidebar }) {
  const { title } = useParams();
  console.log(title);
  return (
    <div>
        {coursesSidebar.filter(card)}
    </div>
  );
}

export default SingleCourse;
