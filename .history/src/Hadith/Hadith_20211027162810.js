import React, { useEffect, useState } from "react";
import axios from "axios";
import { AllBooks } from "./HadithUrls";
import { useHistory } from "react-router";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Container, Accordion, AccordionSummary, Typography,AccordionDetails, CircularProgress} from '@material-ui/core'


const Hadith = () => {
  const [hadith, setHadith] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const data = await axios
      .get("https://ahadith-api.herokuapp.com/api/ahadith/all/ar-tashkeel ")
      .then((res) => {
        const allData = res.data.AllChapters;
        setHadith(allData);
        setLoading(false)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hadith);
  let history = useHistory();

  return (
    <>
  {}
    <>
  );
};

export default Hadith;
