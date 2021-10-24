import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const chapters.name = useParams();
  return <div>

      {chapters.filter(chapter => chapter.name === name)}
  </div>;
};
