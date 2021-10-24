import React from "react";
import { useParams } from "react-router";

function SingleCourse({ categoryData }) {
  const { id } = useParams();
  return (
      <>
    <div>
      {categoryData.filtter(card => card.id === id)}
    </div>

  
    </>
  );
}

export default SingleCourse;
