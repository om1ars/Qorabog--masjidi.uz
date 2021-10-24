import React, { useState } from "react";
import axios from axios

export const api = () => {

    const [data, setData] = useState('')
  
    axios.get(
      "http://api.alquran.cloud/v1/edition?format=audio&language=fr&type=versebyverse"
    )
    .then((response) => {
      console.log(response);

    });

  return <div></div>;
};
