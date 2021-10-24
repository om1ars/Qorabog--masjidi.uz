import { Backspace } from "@material-ui/icons";
import React from "react";
import { useHistory, useParams } from "react-router";
import { coursesSidebar } from "./CoursesCategories";

function SingleCourse() {
  const { id } = useParams();
  const history = useHistory();

  return (
    <>
      {coursesSidebar
        .filter((card) => card?.id === id).map((c) => (
          <div key={c.id}>
            <p>{c.title} </p>
          </div>
        ))}
      <div className="singleCourse">
        <div className="header">
          <Backspace onClick={() => history.push("/courses")} />
        </div>
        <div className="context" style={{display: 'flex', textAlign: 'center'}}>
      <p>  kurslari yaqinda joylashtiriladi inSha Allah
        </div>
      </div>
    </>
  );
}

export default SingleCourse;
