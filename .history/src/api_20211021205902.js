import React from 'react'

export const api = () => {
    axios
  .get(
    "http://api.alquran.cloud/v1/edition?format=audio&language=fr&type=versebyverse"
  )
  .then((response) => {
    console.log(response);
  });

    return (
        <div>
            
        </div>
    )
}
