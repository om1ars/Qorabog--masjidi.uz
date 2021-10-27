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

export const SingleChapter = ({ quranData, loading, setLoading }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#d4e9e2",
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
        output.name.toLowerCase().includes(search) ||
        output.englishName.toLowerCase().includes(search)  ||
        output.englishNameTranslation.toLowerCase().includes(search)  
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
      <ThemeProvider>
        <Container style={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{ margin: 18, fontFamily: "MontSerrat" }}
          >
            Qur'oni Karim
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
              <LinearProgress style={{ backgroundColor: "gold", height: '20vh' }} />
            ) : (
              <>
                <Table>
                  <TableHead style={{ backgroundColor: "#eebc10" }}>
                    <TableRow>
                      {[
                        "Suralar",
                        "Nomi",
                        "Tarjima",
                        "Nuzul joyi",
                      ].map((head) => (
                        <TableCell
                          style={{
                            color: "black",
                            fontWeight: "700",
                            fontFamily: "Montserrat",
                          }}
                          key={head}
                          align={"right"}
                        >
                          {head}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {handleSearch()
                      // .slice((page - 1) * 20, (page - 1) * 20 + 20)
                      .map((chapter) => {
                        const {
                          id,
                          name,
                          number,
                          englishName,
                          englishNameTranslation,
                          revelationType,
                        } = chapter;

                        return (
                          <TableRow
                            onClick={() =>
                              history.push(`/singlechapter/${number}`)
                            }
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
                            <TableCell align="right">{englishName}</TableCell>
                            <TableCell align="right">
                              {englishNameTranslation}
                            </TableCell>
                            <TableCell align="right">
                              {revelationType}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </>
            )}
          </TableContainer>
   
        </Container>
      </ThemeProvider>
    </div>
  );
};

