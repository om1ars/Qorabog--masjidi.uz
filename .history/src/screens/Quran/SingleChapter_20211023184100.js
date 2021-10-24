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
    <>
    {data.map((d) => d.surahs.map((s) => {
      console.log();
    }))}
    </>
  )

 