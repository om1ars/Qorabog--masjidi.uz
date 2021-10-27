import React from "react";
import { Container } from "@material-ui/core";
import './SingleAyah.css'

export const SingleAyah = ({ ayah }) => {
  const { number, hizbQuarter, manzil, juz, page, ruku, sajda, text } = ayah;
  return (
    <Container style={{paddingTop: 40}}>
      <p style={{ textAlign: "right", dis }}>
        <span className='singleAyah__number'>{number}</span> <span>{text}</span>{" "}
      </p>
      <hr />
      <div>

      </div>
    </Container>
  );
};
