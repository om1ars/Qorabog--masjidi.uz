import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './SingleChapter.css'
import { chapters } from "../../store/ru";
import { Pagination } from "@material-ui/lab";
import {  makeStyles, Container } from '@material-ui/core'



export const SingleChapter = ({output}) => {
  const [page, setPage] = useState(1)
    const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "#d4e9e2",
      },
    },
  });

  const classes = useStyles();


  return (
    <ThemeProvider>
      <Container style={{textALign: 'center'}}>
        
      </Container>
    </ThemeProvider>
    
  );
};
