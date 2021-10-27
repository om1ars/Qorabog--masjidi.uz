import React from "react";

const famousData = [
  { id: 1, title: "Al-Fatiha" },
  { id: 2, title: "  Oyatul-kursiy" },
  { id: 3, title: " Al-Baqara" },
  { id: 4, title: "    Ar-Rohman" },
  { id: 5, title: "   Yosin" },
  { id: 6, title: "   Taborak" },
  { id: 7, title: "   Vaqiah" },
  { id: 8, title: "   Zariat" },
  { id: 9, title: "   Qomar" },
  { id: 10, title: "   Ixlos" },
  { id: 11, title: "   An-Nas" },
  { id: 12, title: "   Al-Falaq" },
  { id: 13, title: "   Kafirun" },
  { id: 14, title: "   Tabbat" },
  { id: 15, title: "   Takasur" },
  { id: 16, title: "   Nasr" },
  { id: 17, title: "   Balad" },
  { id: 18, title: "   Kavsar" },
  { id: 19, title: "   " },
  { id: 20, title: "   Vaqiah" },
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
