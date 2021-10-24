import React, { useEffect, useState } from "react";
import SearchBar from "material-ui-search-bar";
import "./Quran.css";
import { SingleChapter } from "./SingleChapter";
import { Search } from "@material-ui/icons";

function Quran({ chapters }) {

  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])


  useEffect(() => {
    setOutput([])
    chapters.filter(val=> {
      if(val.transliteration.toLowerCase().includes(input.))
    })

  }, [input])

  return (
    <div className="Bx">
      <div className="popular__ones">
        <span>Eng ko'p qidirilghan</span>
       <div className='quran__container'>

         <div className='input__bx' >
           <input type='type' onChange = {(e) => setInput(e.target.value)} />
           <Search />
         </div>
         <div className="container__box">
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Al-Fatiha</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Oyatul-kursiy</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Al-Baqara</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Ar-Rohman</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Yosin</a>
          </div>
          <div className="bx">
            <a href='http://tafsirihilol.uz/' style={{textDecoration: 'none', color: 'black'}}>Taborak</a>
          </div>
        </div>
       </div>
      </div>
      <div>
        <SingleChapter chapters={chapters} />
      </div>
    </div>
  );
}

export default Quran;
