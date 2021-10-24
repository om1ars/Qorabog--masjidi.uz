import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const chap = useParams();
  return <div>

      {chapters.filter(chapter => chapter.name === name)}
  </div>;
};
