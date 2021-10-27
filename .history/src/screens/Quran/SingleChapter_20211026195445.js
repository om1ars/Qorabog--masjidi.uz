import React, { useEffect, useState } from "react";
// import { chapters } from "../../store/ru";
import { Link } from "react-router-dom";
import axios from "axios";
import './SingleChapter.css'
import { chapters } from "../../store/ru";
import { Pagination } from "@material-ui/lab";
import {  makeStyles, Container } from '@material-ui/core'
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
import { useHistory } from "react-router";




export const SingleChapter = ({output}) => {

  сщтые Х
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
        color: "gold",
      },
    },
  });

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

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
                      .slice((page - 1) * 10, (page - 1) * 10 + 10)
                      .map((row) => {
                        const profit = row.price_change_percentage_24h > 0;
                        return (
                          <TableRow
                            onClick={() => history.push(`/coins/${row.id}`)}
                            className={classes.row}
                            key={row.name}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              style={{ display: "flex", gap: 15 }}
                            >
                              <img
                                src={row?.image}
                                alt={row.name}
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
                                  {row.symbol}
                                </span>
                                <span style={{ color: "darkgrey" }}>
                                  {row?.name}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell style={{ align: "right" }}>
                              {symbol}
                              {numberWithCommas(row.current_price.toFixed(2))}
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{ color: profit > 0 ? "green" : "red" }}
                            >
                              {profit && "+"}
                              {row.price_change_percentage_24h.toFixed(2)}%
                            </TableCell>
                            <TableCell align="right">
                              {symbol}
                              {numberWithCommas(
                                row.market_cap.toFixed(2).slice(0, -6)
                              )}
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
            count={(handleSearch()?.length / 10).toFixed(0)}
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