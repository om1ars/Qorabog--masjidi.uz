import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchSingle } from "../../redux/slices/singleQuran";
import { SingleAyah } from "./SingleAyah";
import { Url } from "./Url";

export const SingleSurah = ({}) => {
  const { number } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const fetchedSingleSurah = useSelector(state => state.single.single)
  console.log(fetchedSingleSurah);
  const [singledata, setSingleData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await axios.get(Url(number)).then((res) => {
      const alldata = res.data.data.ayahs;
      setSingleData(alldata);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
    dispatch(fetchSingle(number))
  }, []);




  return (
    <>
      {loading ? (
        <div style={{display: 'grid', placeItems: 'center', height: '90vh', fontFamily: 'Scheherazade New'}} >
          <CircularProgress />
          <p style={{fontSize: 60, display: 'flex', alignItems: 'center'}}>Sabr qiling... Alloh sabr qiluvchilarni yaxshi ko'radi</p>
 
        </div>
      ) : (
       <>
       {fetchedSingleSurah.map((ayah, index) => (
         <div key={index}>
           <SingleAyah  ayah={ayah} />
         </div>
       ))}
       </>
      )}
    </>
  );
};
