import React from "react";
import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";

export const SingleChapter = ({ quran }) => {
  console.log(quran);
  return (
      <div className="quran__chapters">
      {quran[].map((q) => q.chapter)}
      </div>
  );
};
