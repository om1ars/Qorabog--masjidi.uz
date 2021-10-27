import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";
// import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({quranData}) => {
  const { number } = useParams();

 
  // const [singledata, setSingleData] = useState([])

  // const url = `http://api.alquran.cloud/v1/surah/${number}`
  // const fetchData = async () => {
  //   const {data} = await axios.get(url)
  //   setSingleData(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // },[])


  // console.log(singledata);


  return (
    <div>
    </div>
  );
};
