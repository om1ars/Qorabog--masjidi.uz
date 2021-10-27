import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { chapters } from "../../store/ru";
import { Url } from "./Url";
// import { ArabAyah } from "../../store/quran";

export const SingleSurah = ({}) => {
  const { number } = useParams();
  const [loading, setLoading] = useState(false);

  const [singledata, setSingleData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await axios.get(Url(number)).then((res) => {
      const alldata = res.data.data;
      setSingleData(alldata);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(singledata);

  const {
    ayahs,
    englishName,
    englishNameTranslation,
    numberOfAyahs,
    revelationType,
    name,
  } = singledata;

  return (
    <>
      {loading ? (
        <>
          <CircularProgress />
          <p>Sabr qiling... Alloh sabr qiluvchilarni yaxshi ko'radi</p>
        </>
      ) : (
        <p>{singledata.name}</p>
      )}
    </>
  );
};
