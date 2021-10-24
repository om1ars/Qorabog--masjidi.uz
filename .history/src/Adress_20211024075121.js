import { Facebook, Instagram, Telegram, YouTube } from "@material-ui/icons";
import React from "react";
import "./Adress.css";

function Adress() {
  return (
    <div className="adress">
      <div className="adress__context">
        <div className="text">
          <div className="singleText">
            <h1>Manzil</h1>
            <span>Angren shahri, Lohuti ko'chasi</span>
          </div>
          <div className="singleText">
            <h1>Ish vaqti</h1>
            <span>Dushanba-Yakshanba 24/7</span>
          </div>
          <div className="singleText">
            <h1>Murojaat uchun</h1>
            <span>99 89 049 76 79</span>
          </div>
        </div>
        <div className='adress__icons'>
            <span><Telegram /> </span>
            <span><YouTube /> </span>
            <span><Facebook /> </span>
            <span><Instagram /> </span>
        </div>
      </div>
      <div className="adress__image"></div>
    </div>
  );
}

export default Adress;
