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
        <div className="adress__icons">
          <span>
            <Telegram />{" "}
          </span>
          <span>
            <YouTube />{" "}
          </span>
          <span>
            <Facebook />{" "}
          </span>
          <span>
            <Instagram />{" "}
          </span>
        </div>
      </div>
      <div className="adress__image">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.84088658744!2d70.06387796850326!3d41.026840857409894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afea1d699eb84f%3A0xa62a9c0434c2851a!2z0JzQldCn0JXQotCsIFFPUkFCT0figJggSk9NRSBtYXNqaWRp!5e0!3m2!1sen!2s!4v1635051171523!5m2!1sen!2s"
          width="600"
          height="450"
          style={{"border":0}}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Adress;
