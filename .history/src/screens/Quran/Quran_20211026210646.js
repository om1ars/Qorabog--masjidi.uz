import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./Quran.css";
import { SingleChapter } from "./SingleChapter";
import { Search } from "@material-ui/icons";
import QuranChart from "./QuranChart";

function Quran({ chapters }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput([]);
    chapters.filter((val) => {
      if (val.transliteration.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  return (
    <div className="Bx">
      <div className="popular__ones">
        <span>Eng ko'p qidirilghan</span>
        <div className="quran__container">
          <QuranChart />
        </div>
      </div>
     
    </div>
  );
}

export default Quran;
