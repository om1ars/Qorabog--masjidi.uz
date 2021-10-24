import React, { useEffect, useState } from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import Featured from "../Featured";
import Heading from "../Heading";
import Info from "../Info";
import { Fade } from "react-awesome-reveal";
import n from "../assets/nqori.jpg";
import y from "../assets/yqori.jpg";
import quran from "../assets/quran.jpg";
import madina from "../assets/madina.jpg";
import { Ayahs } from "./Data";
import { Carusel } from "../Carusel";
import Header from "../Header";
import { hadislar } from "../hadislar/Hadith";
import { Oyatlar } from "../hadislar/Oyatlar";

function HomeScreen() {
  const [ayah, setAyah] = useState(Oyatlar);
  const [hadis, setHadis] = useState(hadislar);
  const [showMore, setShowMore] = useState(false)

  const randomHadis = hadis[Math.floor(Math.random() * hadis.length)];
  const randomOyatlar = ayah[Math.floor(Math.random() * ayah.length)];

  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <h4>
            Ushbu Web-sahifa Toshkent viloyati Angren shahri Qora'bog' jome
            masjidi rasmiy sayti hisoblanadi{" "}
            <a href="https://t.me/Angren_Masjid_Official">Telegram kanalimiz</a>
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__bottom">
          <div className="homeScreen__bottomLeft">
            <h4>Qorabog' home masjidi bosh Imom hatibi</h4>
            <p>
              Ҳозирда “Қорабоғ” жоме Масжиди номи билан юритилаётган Ангрен
              шаҳри, Лоҳутий кўчасида жойлашган масжид шаҳар аҳолиси учун
              мўътабар зиё масканидир. “Қорабоғ” жоме Масжиди қурилиши учун
              Совет Иттифоқининг Дин Ишлари бўйича Қўмитаси томонидан, Москва
              шаҳрида, 1989 йил 10 март куни 4-сонли далолатнома тузилган. 1989
              йил 14 июн куни Ангрен шаҳар Халқ депутатлари ижроия қўмитаси
              раиси Султонмурод Холмирзаевнинг Масжид учун 2 гектар ер ажратиш
              тўғрисидаги 263-сонли қарори имзоланган. 1990 йилнинг 26 мартида
              Ўрта Осиё ва Қозоғистон мусулмонлари диний идораси раисининг
              ўринбосари Юсуфхон Шокиров ва қози Абдулғани Абдуллоҳ домлалар <br />
            
              <a style={{color: 'blue', cursor: 'pointer'}} onClick={() => setShowMore(!showMore)}>Davomini o'qish</a>
            </p>
            {showMore ? (
              <p></p>
            )}
            <a href="http://Telegram.me/Angren_Masjid_bot">Savollar uchun</a>
          </div>
          <div class="hvrbox homeScreen__bottomRight">
            <img
              src={y}
              alt="Mountains"
              style={{ borderRadius: 12 }}
              class="hvrbox-layer_bottom"
            />
            <div class="hvrbox-layer_top">
              <div class="hvrbox-text">
                Qorabog' jome masjidi bosh Imom-Haitbi <br /> <br /> <br />
                Bobohonov Yahyohon
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <Heading heading="Bizdan kunlik tuhfa" />
      </Fade>
      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title="Kun oyati"
            info={randomOyatlar}
            link="Qur'oni Karim"
            path=""
            image={quran}
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="Kun hadisi"
            info={randomHadis}
            link="Muhammad S.A.V"
            path=""
            image={madina}
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
      </div>
      <Fade>
        <Heading heading="Masjid ko'rinishi" />
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Carusel />
        </div>
      </Fade>
    </div>
  );
}

export default HomeScreen;
