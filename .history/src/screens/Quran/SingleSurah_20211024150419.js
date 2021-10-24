import React from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";

export const SingleSurah = ({  }) => {
  const {id} = useParams();
  return <div>

      {chapters.filter(chapter => chapter.id === id)}
      {chapters.map((c) => {
        return (
          
        )
      })}
  </div>;
};
