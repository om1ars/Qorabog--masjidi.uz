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
    <div className="quran__chapters">
      {output.slice((page -1) * 20, (page-1)*20+20).map((chapter) => {
        const { id, name, transliteration, translation, total_verses } =
          chapter;
        console.log(translation);

        return (
          <div style={{display: 'flex', flexDirection: 'column', align}}>
          <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>

          <div className="single__chapter">
            <span>{id}</span>
            <div>
             
                <span>{name}</span>

              <span>{translation}</span>
            </div>
            <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
          </div>
          </a>
          <Pagination
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            count={(output?.length / 20).toFixed(0)}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
          </div>

        );
      })}
     
    </div>
  );
};
