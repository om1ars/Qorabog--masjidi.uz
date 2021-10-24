import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SingleChapter.css";

export const SingleChapter = ({ chapters }) => {

    const url = 'https://api.quran.com/api/v4/chapters?language=en'

    const fetchedData = async() => {
      const response = axios.get(url).catch((error) => console.log())
    }

  return (
    <div className="quran__chapters">
      {chapters.map((chapter) => {
        const { id, name, transliteration, translation, total_verses } =
          chapter;
        console.log(translation);

        return (
          <div className="single__chapter">
            <span>{id}</span>
            <div>
              <span>{name}</span>

              <span>{translation}</span>
            </div>
            <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
          </div>
        );
      })}
    </div>
  );
};
