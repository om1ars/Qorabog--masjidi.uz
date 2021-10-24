import React from "react";
import { useParams } from "react-router";

function SingleCourse({ coursesSidebar }) {
  const { title } = useParams();
  console.log(title);
  return (
      <>
    <div>
      {coursesSidebar.filter(card => card.id === title)}
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
