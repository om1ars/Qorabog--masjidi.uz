import React from "react";
import { useParams } from "react-router";

export const SingleSurah = ({ chapters }) => {
  const { name } = useParams();
  return <div>

      {chapters.filter(chapter => chapter.name === name).map((c) => (
          <span>{c.name}</span>
      ))}
  </div>;
};
