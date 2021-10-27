import React from "react";
import AliceCarousel from "react-alice-carousel";


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
  { id: 19, title: "   A'rof" },
  { id: 20, title: "   Moida" },
];

const reponsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const items = famousData.map((f) => (
    <div classNam='' style={{display: 'flex', justifyContent: 'space-around', wid}}>
    <div className="bx">
      <a
        href="http://tafsirihilol.uz/"
        style={{ textDecoration: "none", color: "black" }}
      >
        {f.title}
      </a>
    </div>
    </div>
  ) )

function QuranChart() {
  return (
<>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={500}
            animationDuration={1500}
            disableDotsControls
            responsive={reponsive}
            autoPlay
            disableButtonsControls
            items={items}
          ></AliceCarousel>
        </>

  );
}

export default QuranChart;
