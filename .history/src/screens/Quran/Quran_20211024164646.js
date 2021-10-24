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
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Al-Fatiha</span>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Oyatul-kursiy</span>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Al-Baqara</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Ar-Rohman</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Yosin</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Taborak</a>
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
