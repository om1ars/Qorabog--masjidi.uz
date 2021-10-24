import React, { useState } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";

export const SingleSurah = ({  }) => {
  const {id} = useParams();
  const [data, setData] = useState([])
  return <div>



      {chapters.filter(chapter => chapter.id === id)}
      {chapters.map((c) => {
        return (
          <div>{ c.name}</div>
        )
      })}
  </div>;
};
