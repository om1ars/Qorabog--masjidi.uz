import React from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";

export const SingleSurah = ({  }) => {
    const {translation, name} = chapters
  const {id} = useParams();
  console.log(translation);
  return <div>

      {chapters.filter(chapter => chapter.id === id)}
  </div>;
};