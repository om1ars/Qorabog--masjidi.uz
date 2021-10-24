import React, { useEffect, useState } from "react";
import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";

export const SingleChapter = ({ quran }) => {
  const [data, setData] = useState("");

  const url =
    "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/index.json";

  const getData = () => {
    axios.get(url).then((res) => {
      const notes = res.data;
      setData(notes);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className="quran__chapters">
      {data.map}
    </div>
  );
};
