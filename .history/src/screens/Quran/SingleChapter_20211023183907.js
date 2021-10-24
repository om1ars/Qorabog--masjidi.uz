import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SingleChapter.css";

export const SingleChapter = ({ chapters }) => {

  const[data, setData] = useState([])
  const url = "http://api.alquran.cloud/v1/quran/quran-uthmani";

  const fetchedData = async () => {
    const response = await axios.get(url).catch((error) => console.log(error));
    setData(response.data)
  };

  useEffect(() => {
    fetchedData();
  }, []);

  console.log(data);

  return (
    <div className="quran__chapters">
      {data.map((data, index) => data.surah.map((s) => {
        console.log(s)
        return (
          <div>
            <div className="single__chapter" key={index}>
            <span>{number}</span>
            <div>
              <span>{englishName}</span>

              <span>{englishNameTranslation}</span>
            </div>
            <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
          </div>
          </div>
        )
      }
      
      
      )
       

      // </div>
       

 