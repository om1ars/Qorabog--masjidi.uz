import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";

export const SingleSurah = ({}) => {


const fetchedData = () => {
  const { id } = useParams();

  const [dataOf, setDataOf] = useState([]);

  axios
    .get("http://api.alquran.cloud/v1/quran/quran-uthmani ")
    .then((response) => {
      const quran = response.data;
      setDataOf(quran);
    });

  };
   useEffect(() => {
      fetchedData();
    }, []);

  return (
    <div>
      {chapters.filter((chapter) => chapter.id === id)}
      {dataOf.map((c) => {
        return <div>{c.name}</div>;
      })}
    </div>
  );
};
