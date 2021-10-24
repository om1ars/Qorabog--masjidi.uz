import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const {translation} = useParams();
  console.log(translation);
  return <div>

      {chapters.filter(chapter => chapter.translation === translation)}
  </div>;
};
