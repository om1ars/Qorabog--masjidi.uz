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
     <Container>
     <Typography
            variant="h4"
            style={{ margin: 18, fontFamily: "MontSerrat" }}
          >
            Market place
          </Typography>
          <TextField
            onClick={handleSearch}
            label="Search"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: 20, width: "100%" }}
          />
     </Container>
    </ThemeProvider>
    
  );
};
