import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
;

function Quran() {
  const doSomethingWith = () => {}
  return (
    <div className="containerBx">
      <div className="header">
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
