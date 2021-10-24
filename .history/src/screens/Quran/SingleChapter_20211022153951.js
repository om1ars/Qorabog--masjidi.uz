import React from "react";
import { chapters } from "../../store/ru";

export const SingleChapter = () => {
  return (
    <>
      {chapters.map((chapter) => {
  const {id, anme, transliteration, translation, total_verses} = chapter
        <div className="quran__chapters">
          <div className="single__chapter">
            <span>1</span>
            <div>
              <span>Faithah</span>
              <span>Otkrivayushi</span>
            </div>
            <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
          </div>
        </div>
      ){}}
    </>
  );
};
