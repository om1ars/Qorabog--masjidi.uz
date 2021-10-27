import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";
import { Url } from "./Url";
// import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({quranData}) => {
  const { number } = useParams();

 
  const [singledata, setSingleData] = useState([])

  const fetchData = async () => {
    const {data} = await axios.get(Url(number))
    setSingleData(data)
  }

  useEffect(() => {
    fetchData()
  },[])


  console.log(singledata);


  return (
    <div>
      {}
    </div>
  );
};
