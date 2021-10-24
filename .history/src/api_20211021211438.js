import React, { useEffect, useState } from "react";
import axios from 'axios'

export const api = () => {

    const [repo, setRepo] = useState([])
  
  const fetchData = () =>{axios.get(
      "http://api.alquran.cloud/v1/edition?format=audio&language=fr&type=versebyverse"
    )
    .then((response) => {
      console.log(response);
      const myRepo = response.data
      setData(myRepo)

    });}

    useEffect(() => {
        fetchData()
    },[])

  return (
      <>
      {repo.map((d) => {
          console.log('hello')
      })}
      </>
  );
};
