import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";
// import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({}) => {
  const { number } = useParams();

 
  const [singledata, setSingleData] = useState([])

  const url = `http://api.alquran.cloud/v1/surah/${number}`
  const fetchData = () => {
    const {data} = await axios.get()
  }

  useEffect(() => {
    fetchData()
  },[])



  return (
    <div>
      {singledata.map(() => (
        <div></div>
      ))}
    </div>
  );
};
