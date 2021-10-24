import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const { id } = useParams();
  return <div>

      {chapters.filter(chapter => chapter.id === id).map((c) => ())}
  </div>;
};
