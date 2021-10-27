import React from "react";
import { Container } from "@material-ui/core";
import "./SingleAyah.css";

export const SingleAyah = ({ ayah }) => {
  const { number, hizbQuarter, manzil, juz, page, ruku, sajda, text } = ayah;
  return (
    <Container style={{ paddingTop: 40 }}>
      <p
        style={{
          textAlign: "right",
          alignItems: "center",
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="singleAyah__number">{number}</span>
          <span style={{ textAlign: "right !important" }}>{text}</span>
        </div>
      </p>

      <div>
        <p><span>{hizbQuarter}</span><span>-Qur'onidagi hizb-</span></p>
        <p><span>{manzil}</span><span>-Qur'onidagi manzili</span></p>
        <p><span>{juz}</span><span>-Qur'onidagi juzi</span></p>
        <p><span>{ruku}</span><span>-Qur'onidagi rukusi</span></p>
      
      </div>
      <hr />
    </Container>
  );
};
