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
          <span className="singleAyah__number" ><span>{number}</span><span> -oyat</span></span>
          <span style={{ textAlign: "right !important" }}>{text}</span>
        </div>
      </p>

      <div style={{display: 'flex',  justifyContent: 'space-between'}}>
          <div>
        <p>
          <span>Qur'onidagi hizb-</span>
          <span>{hizbQuarter}</span>
        </p>
        <p>
          <span>Qur'onidagi manzili-</span>
          <span>{manzil}</span>
        </p>
        <p>
          <span>Qur'onidagi juzi-</span>
          <span>{juz}</span>
        </p>
        <p>
          <span>Qur'onidagi rukusi-</span>
          <span>{ruku}</span>
        </p>
        </div>
        <p> sahifa - {page}</p>
      </div>
      <hr />
    </Container>
  );
};
