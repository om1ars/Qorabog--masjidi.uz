import React, { useEffect, useState } from "react";
import axios from 'axios'

export const Api = () => {

    const [repo, setRepo] = useState([])
  
  const fetchData = () =>{axios.get(
      "https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json"
    )
    .then((response) => {
      // console.log(response);
      const myRepo = response.data
      setRepo(myRepo)

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
