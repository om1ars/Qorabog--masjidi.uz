import React from "react";
import { Container } from "@material-ui/core";
import "./SingleAyah.css";

export const SingleAyah = ({ ayah }) => {
  const { number, hizbQuarter, manzil, juz, page, ruku, sajda, text } = ayah;
  return (
    <Container style={{ paddingTop: 40 }}>
      <div style={{ display: "flex", textAlign: "right", alignI }}>
        <span className="singleAyah__number">{number}</span>{" "}
        <span style={{ textAlign: "right !important" }}>{text}</span>{" "}
      </div>
      <hr />
      <div></div>
    </Container>
  );
};
