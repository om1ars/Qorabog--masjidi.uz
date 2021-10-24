import axios from axios
import {useS}

axios
  .get(
    "http://api.alquran.cloud/v1/edition?format=audio&language=fr&type=versebyverse"
  )
  .then((response) => {
    console.log(response);
  });
