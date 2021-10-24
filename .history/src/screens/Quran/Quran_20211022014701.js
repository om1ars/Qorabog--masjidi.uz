import React, { useState } from "react";
import { Api } from "../../Api";

function Quran() {
  const [data, setData] = useState(Api);
  return (
    <div className="container">
      <div className="header">
        <div className="imgBx">
          <img src="	https://cdn.qurancdn.com/assets/quran-logo-f5d0f12…3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" />
        </div>
      </div>
    </div>
  );
}

export default Quran;
