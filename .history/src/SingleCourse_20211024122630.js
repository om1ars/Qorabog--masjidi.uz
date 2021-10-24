import React from "react";
import { useParams } from "react-router";

function SingleCourse({ coursesSidebar }) {
  const { title } = useParams();
  console.log(title);
  return (
    <div>
      {coursesSidebar
        .filter((card) => card.title === title)
        .map(({ title, card }) => {
            console.log(title)
          return<div>{title}</div>;
        })}
    </div>
  );
}

export default SingleCourse;
