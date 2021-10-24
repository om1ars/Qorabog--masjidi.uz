import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";

export const SingleSurah = ({}) => {
  const { id } = useParams();
  const [data, setDataOf] = useState([]);

  const fetchedData = () => {
     axios.get(
      "http://api.alquran.cloud/v1/quran/quran-uthmani "
    ).then(response => {
      const quran = response.data
      setData
    });
  };
  return (
    <div>
      {chapters.filter((chapter) => chapter.id === id)}
      {chapters.map((c) => {
        return <div>{c.name}</div>;
      })}
    </div>
  );
};
