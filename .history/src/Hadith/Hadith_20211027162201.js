import React, { useEffect, useState } from "react";
import axios from "axios";
import { AllBooks } from "./HadithUrls";
import { useHistory } from "react-router";
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
             <Container style={{paddingTop: 50}}>
             <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Hadis sanadi</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
          </Accordion>
             </Container>
      ))}
    </Container>
  );
};

export default Hadith;
