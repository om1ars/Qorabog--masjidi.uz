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
        <div className="container__box">
          <div className="bx">
            <span>Al-Fatiha</span>
          </div>
          <div className="bx">
            <span>Oyatul-kursiy</span>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>>Al-Baqara</a>
          </div>
          <div className="bx">
            <span>Ar-Rohman</span>
          </div>
          <div className="bx">
            <span>Yosin</span>
          </div>
          <div className="bx">
            <span>Taborak</span>
          </div>
        </div>
      </div>
      <div>
        <SingleChapter chapters={chapters} />
      </div>
    </div>
  );
}

export default Quran;
