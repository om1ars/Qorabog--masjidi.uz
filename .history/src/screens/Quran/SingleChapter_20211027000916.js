import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SingleChapter.css";
import { chapters } from "../../store/ru";
import { Pagination } from "@material-ui/lab";
import {
  Container,
  createTheme,
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useHistory } from "react-router";
import MasjidState from "../.././store/Context";

export const SingleChapter = ({ quranData, loa }) => {
  const [page, setPage] = useState(1);
  const[ search, setSearch] = useState('')




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

  const handleSearch = () => {
    return quranData.filter(
      (output) =>
        output.name.toLowerCase().includes(search) 
    );
  };

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });






  const history = useHistory();

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Container style={{ textAlign: "center" }}>
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
          <TableContainer>
            {loading ? (
              <LinearProgress style={{ backgroundColor: "gold" }} />
            ) : (
              <>
                <Table>
                  <TableHead style={{ backgroundColor: "#eebc10" }}>
                    <TableRow>
                      {["Coins", "Price", "24h Change", "Market Cup"].map(
                        (head) => (
                          <TableCell
                            style={{
                              color: "black",
                              fontWeight: "700",
                              fontFamily: "Montserrat",
                            }}
                            key={head}
                            align={head === "Coin" ? " " : "right"}
                          >
                            {head}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {handleSearch()
                      .slice((page - 1) * 20, (page - 1) * 20 + 20)
                      .map((chapter) => {
                        const {
                          id,
                          name,
                          number,
                          englishName,
                        } = chapter;

                        return (
                          <TableRow
                            onClick={() => history.push(`/singlechapter/${number}`)}
                            className={classes.row}
                            key={name}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{ display: "flex", gap: 15 }}
                            >
                              <img
                                src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
                                alt={name}
                                height="50"
                                style={{ marginBottom: 15 }}
                              />
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span
                                  style={{
                                    textTransform: "uppercase",
                                    fontSize: 22,
                                  }}
                                >
                                  {englishName}
                                </span>
                                <span style={{ color: "darkgrey" }}>
                                  {name}
                                </span>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </>
            )}
          </TableContainer>
          <Pagination
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            count={(handleSearch().length / 20).toFixed(0)}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
        </Container>
      </ThemeProvider>
    </div>
  );
};

// <div className="quran__chapters">
//       {output.slice((page -1) * 20, (page-1)*20+20).map((chapter) => {
//         const { id, name, transliteration, translation, total_verses } =
//           chapter;
//         console.log(translation);

//         return (
//           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
//           <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>

//           <div className="single__chapter">
//             <span>{id}</span>
//             <div>

//                 <span>{name}</span>

//               <span>{translation}</span>
//             </div>
//             <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
//           </div>
//           </a>
//           <Pagination
//             style={{
//               padding: 20,
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//             }}
//             classes={{ ul: classes.pagination }}
//             count={(output?.length / 20).toFixed(0)}
//             onChange={(_, value) => {
//               setPage(value);
//               window.scroll(0, 450);
//             }}
//           />
//           </div>

//         );
//       })}

//     </div>
