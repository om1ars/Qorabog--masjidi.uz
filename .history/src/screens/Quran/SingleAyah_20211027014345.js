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
        <p><span>{hizbQuarter}</span><span>-Qur'onidagi hizb</span></p>
        <p>{manzil}</p>
        <p>{juz}</p>
        <p>{page}</p>
        <p>{ruku}</p>
      </div>
      <hr />
    </Container>
  );
};
