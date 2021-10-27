import React, { useEffect, useState } from "react";
import axios from "axios";
import { AllBooks } from "./HadithUrls";
import { useHistory } from "react-router";
import { Container } from "@material-ui/core";
import SingleHadith from "./SingleHadith";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Container, Accordion, AccordionSummary, Typography,AccordionDetails} from '@material-ui/core'


const Hadith = () => {
  const [hadith, setHadith] = useState([]);

  const fetchData = async () => {
    const data = await axios
      .get("https://ahadith-api.herokuapp.com/api/ahadith/all/ar-tashkeel ")
      .then((res) => {
        const allData = res.data.AllChapters;
        setHadith(allData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hadith);
  let history = useHistory();

  return (
    <Container>
      {hadith.map((hadis, index) => (
        
      ))}
    </Container>
  );
};

export default Hadith;
