import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";
import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({}) => {
  const { id } = useParams();

  const [dataOf, setDataOf] = useState([]);

  const fetchedData = () => {
    axios
      .get("http://api.alquran.cloud/v1/quran/quran-uthmani ")
      .then((response) => {
        const quran = response.data;
        setDataOf(quran);
      })
      .catch((error) => console.log(error, "error"));
  };
  useEffect(() => {
    fetchedData();
  }, []);

  console.log(dataOf);

  return (
    <div>
      {chapters.filter((chapter) => chapter.id === id)}
      {Object.entries(ArabAyah).forEach(student) => 
        console.log(`ayah : ${student[0]}`)}
    </div>
  );
};
