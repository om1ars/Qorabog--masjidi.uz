import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";
// import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({}) => {
  const { id } = useParams();

 
  const [data, setData] = useState([])

  const url = 'http://api.alquran.cloud/v1/surah/'
  const fetchData = () => {
    axios.get(url).then((res) => {
      const allData = res.data
      console.log(allData);
      setData(allData)
    }).catch((error => console.error(`error: ${error}`)))
  }

  useEffect(() => {
    fetchData()
  },[])



  return (
    <div>
      {chapters.filter((chapter) => chapter.id === id)}

    </div>
  );
};
