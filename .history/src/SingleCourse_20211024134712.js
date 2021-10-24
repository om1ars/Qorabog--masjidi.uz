import React from "react";
import { useParams } from "react-router";

function SingleCourse({ categoryData }) {
  const { id } = useParams();
  return (
    <>
      <div>{
          if(categoryData)
          }</div>
    </>
  );
}

export default SingleCourse;
