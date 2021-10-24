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
import { Facebook, Instagram, Telegram, YouTube } from "@material-ui/icons";
import Group from "../Group";

function HomeScreen() {
  const [ayah, setAyah] = useState(Oyatlar);
  const [hadis, setHadis] = useState(hadislar);

  const randomHadis = hadis[Math.floor(Math.random() * hadis.length)];
  const randomOyatlar = ayah[Math.floor(Math.random() * ayah.length)];

  return (
    <div className="homeScreen" style={{position: 'relative'}}>
      <div className="messengers" style={{position: 'absolute', top: '15%', cursor: 'pointer', left: 10, position: 'fixed', zIndex: 9999}}>
        <div>
          <Facebook style={{color: '#3b5998'}} />
        </div>
        <div>
          <Instagram style={{color: '#fbad50'}}/>
        </div>
        <div>
          <Telegram style={{color: '#0088cc'}} />
        </div>
        <div>
          <YouTube style={{color: '	#FF0000'}} />
        </div>
      </div>
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
            <p style={{ textAlign: "left" }}>
              Ҳозирда “Қорабоғ” жоме Масжиди номи билан юритилаётган Ангрен
              шаҳри, Лоҳутий кўчасида жойлашган масжид шаҳар аҳолиси учун
              мўътабар зиё масканидир. “Қорабоғ” жоме Масжиди қурилиши учун
              Совет Иттифоқининг Дин Ишлари бўйича Қўмитаси томонидан, Москва
              шаҳрида, 1989 йил 10 март куни 4-сонли далолатнома тузилган. 1989
              йил 14 июн куни Ангрен шаҳар Халқ депутатлари ижроия қўмитаси
              раиси Султонмурод Холмирзаевнинг Масжид учун 2 гектар ер ажратиш
              тўғрисидаги 263-сонли қарори имзоланган. 1990 йилнинг 26 мартида
              Ўрта Осиё ва Қозоғистон мусулмонлари диний идораси раисининг
              ўринбосари Юсуфхон Шокиров ва қози Абдулғани Абдуллоҳ домлалар
              янги Масжиднинг қибласини аниқлаб берганлар. Шу вақтда масжиднинг
              биринчи ҳайъати тузилиб, қурилиш учун ҳаракат бошланган.
              Ангрен-Оҳангарон воҳасида Шўро ҳукумати давридаги мураттаб қори,
              диний илмлар эгаси, “колхоз”дан нафақага чиққан, 84 ёшли Қосимхон
              қори Бобохонов Масжиднинг биринчи ғиштини қўйиб берган. Шундай
              қилиб, 1989-1992 йиллар оралиғида мулла Сиддиқ Фозилжонов, мулла
              Жўра домло Турматов ҳамда Масжид фаоллари бошчилигида халқ ҳашари
              билан қуриб битказилган. Дастлаб 1993 йил Тошкент вилояти Адлия
              Бошқармаси ҳайъати мажлиси қарори билан ўша йилнинг 13 май куни
              рўйхатдан ўтказилган. Ўзбекистон Республикаси Олий Мажлисининг
              1998 йил 1 майдаги “Виждон эркинлиги ва диний ташкилотлар
              тўғрисидаги” қонунига асосан, ўша йилнинг 11 август куни қайта
              рўйхатдан ўтказилган ва 23-сонли гувоҳнома берилган. “Қорабоғ”
              жоме Масжидининг умумий биноси 1572 кв.м ни ташкил этади. Шундан,
              1028 кв.м, 309 кв.м. Масжид таҳоратхонаси ва 235 кв.м майдонга 6
              хонадан иборат ходимлар хизмат хоналари жойлашган. Масжиднинг
              баландлиги 6,9 м, таг қисми эса тўлиқ ертўла қилинган.
              Таҳоратхонада 24 та хона ва таҳорат қилиш учун 24 та нуқта мавжуд
              бўлиб, бир вақтнинг ўзида 48 кишига хизмат кўрсатади. Бу Масжидда
              йиллар давомида мулла Сиддиқ Фозилжонов, Жакбаров Абдулқодир
              домла, Турматов Хайрулла ҳамда Бабохонов Яхъёхон қорилар имом
              хатиб бўлиб хизмат қилдилар. Ҳозирги кунда “Кўкалдош” ўрта махсус
              ислом билим юртини тамомлаган Бабохонов Яхъёхон қори имом-хатиблик
              қилмоқда.
            </p>
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
                Qorabog' jome masjidi bosh Imom-Hatibi <br /> <br /> <br />
                Baboxonov Yahyoxon
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
      <Fade>
        <
      </Fade>
    </div>
  );
}

export default HomeScreen;
