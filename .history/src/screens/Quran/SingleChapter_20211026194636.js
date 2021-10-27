import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import './SingleChapter.css'
import { chapters } from "../../store/ru";
import { Pagination } from "@material-ui/lab";
import {  makeStyles, Container } from '@material-ui/core'



export const SingleChapter = ({output}) => {
  const [page, setPage] = useState(1)
  //   console.log(chapters);
  //   const [data, setData] = useState("");

  //   const url =
  //     "https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/index.json";

  //   const getData = () => {
  //     axios.get(url).then((res) => {
  //       const notes = res.data;
  //       setData(notes);
  //     });
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   console.log(data);
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
        color: "gold",
      },
    },
  });

  const classes = useStyles();


  return (
    
  );
};




























