import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./Quran.css";
import { SingleChapter } from "./SingleChapter";

function Quran({quran}) {
  const doSomethingWith = () => {};
  return (
    <div className="Bx">
     
      <div className="popular__ones">
        <span>Популярные запросы</span>
        <div className="container__box">
          <div className="bx">
            <span>lorem kokd</span>
          </div>
          <div className="bx">
            <span>lorem kokd</span>
          </div>
          <div className="bx">
            <span>lorem kokd</span>
          </div>
          <div className="bx">
            <span>lorem kokd</span>
          </div>
          <div className="bx">
            <span>lorem kokd</span>
          </div>
          <div className="bx">
            <span>lorem kokd</span>
          </div>
        </div>
      </div>
      <div >
        <SingleChapter quran={quran} />
      </div>
    </div>
  );
}

export default Quran;
