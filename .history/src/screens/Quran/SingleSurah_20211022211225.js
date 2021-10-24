import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
    const {name} = chapters
  const name = useParams();
  return <div>

      {chapters.filter(chapter => chapter.name === name)}
  </div>;
};
