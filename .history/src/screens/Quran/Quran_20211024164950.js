import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./Quran.css";
import { SingleChapter } from "./SingleChapter";

function Quran({ chapters }) {
  const doSomethingWith = () => {};
  return (
    <div className="Bx">
      <div className="popular__ones">
        <span>Eng ko'p qidirilghan</span>
       <div className='quran__container'>

         <div className='input__b'
       </div>
      </div>
      <div>
        <SingleChapter chapters={chapters} />
      </div>
    </div>
  );
}

export default Quran;
