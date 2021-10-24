import React from "react";
import { useParams } from "react-router";

function SingleCourse({ categoryData }) {
  const { id } = useParams();

  log
  return (
    <>
      {/* <div>{categoryData.filter((card) => card?.id === id)}</div> */}
    </>
  );
}

export default SingleCourse;
