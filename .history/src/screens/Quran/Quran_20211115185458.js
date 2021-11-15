import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./Quran.css";
import { SingleChapter } from "./SingleChapter";
import { Search } from "@material-ui/icons";

function Quran({ quranData, loading, setLoading }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);


  return (
    <div className="Bx">
      <div>
        <SingleChapter loading={loading} setLoading={setLoading} quranData={quranData} />
      </div>
    </div>
  );
}

export default Quran;
