import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import './SingleChapter.css'


export const SingleChapter = ({ chapters }) => {
  //   console.log(chapters);
  //   const [data, setData] = useState("");

  //   const url =
  //     "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/index.json";

  //   const getData = () => {
  //     axios.get(url).then((res) => {
  //       const notes = res.data;
  //       setData(notes);
  //     });
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   console.log(data);

  return (
    <div className="quran__chapters">
      {chapters.map((chapter) => {
        const { id, name, transliteration, translation, total_verses } =
          chapter;
        console.log(translation);

        return (
          <div className="single__chapter">
            <Link to={} style={{textDecoration: 'none', color: 'black'}}>
            <span>{id}</span>
            <div>
             
                <span>{name}</span>

              <span>{translation}</span>
            </div>
            <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
          </div>
        );
      })}
      </Link>
    </div>
  );
};
