import React from "react";
import { useParams } from "react-router";

function SingleCourse({ coursesSidebar }) {
  const { id } = useParams();
  return (
      <>
    <div>
      {coursesSidebar.filter(card => card.id === id)}
    </div>

    <div className=''>
        {coursesSidebar.map((card) => (
            <div>{card.title}</div>
        ))}
    </div>
    </>
  );
}

export default SingleCourse;
