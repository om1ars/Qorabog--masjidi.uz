import React from "react";

const famousData = [
  { id: 1, title: "Al-Fatiha" },
  { id: 2, title: "  Oyatul-kursiy" },
  { id: 3, title: " Al-Baqara" },
  { id: 4, title: "    Ar-Rohman" },
  { id: 5, title: "Al-Fatiha" },
  { id: 6, title: "Al-Fatiha" },
];

function QuranChart() {
  return (
    <div className="container__box">
      <div className="bx">
        <a
          href="http://tafsirihilol.uz/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Al-Fatiha
        </a>
      </div>
      <div className="bx">
        <a
          href="http://tafsirihilol.uz/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Oyatul-kursiy
        </a>
      </div>
      <div className="bx">
        <a
          href="http://tafsirihilol.uz/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Al-Baqara
        </a>
      </div>
      <div className="bx">
        <a
          href="http://tafsirihilol.uz/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Ar-Rohman
        </a>
      </div>
      <div className="bx">
        <a
          href="http://tafsirihilol.uz/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Yosin
        </a>
      </div>
      <div className="bx">
        <a
          href="http://tafsirihilol.uz/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Taborak
        </a>
      </div>
    </div>
  );
}

export default QuranChart;
