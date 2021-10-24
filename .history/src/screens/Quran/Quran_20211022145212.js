import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
;

function Quran() {
  const doSomethingWith = () => {}
  return (
    <div className="containerBx">
      <div className="header" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="imgBx">
          <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f12…3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
        </div>
        <div className="inputBx">
          <SearchBar
            value={''}
            onChange={e => {}}
            onRequestSearch={() => doSomethingWith()}
          />
        </div>
      </div>
    </div>
  );
}

export default Quran;
