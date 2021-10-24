import React, { useState } from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import Featured from "../Featured";
import Heading from "../Heading";
import Info from "../Info";
import { Fade } from "react-awesome-reveal";
import n from "../assets/nqori.jpg";
import y from "../assets/yqori.jpg";
import quran from '../assets/quran.jpg'
import madina from '../assets/madina.jpg'
import { Ayahs } from "./Data";

function HomeScreen() {
  const [ayah, setAyah] = useState('')

  const getNewayah = () => {

  }
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
              Qorabog' Jome masjidi bosh Imom hatibi B.?. Yahyohon 1999 yil
              Toshkend shahrhida tug'ilgan. 1999-yildan masjida bosh Imom
              sifatida xizmat qilib kelmoqda. Har qanday diniy-dunyoviy savollar
              bilan murojaat qilishingiz mumkin
            </p>
            <a href="http://Telegram.me/Angren_Masjid_bot">Savollar uchun</a>
          </div>
          <div class="hvrbox homeScreen__bottomRight">
            <img src={y} alt="Mountains" style={{borderRadius: 12}} class="hvrbox-layer_bottom" />
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
            info={}
            link="Explore the honey drinks"
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
            info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
            link="Try the new pistachio drinks"
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
        <Heading heading="MORE TO DISCOVER" />
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Info
            title="Order and pick up. Easy as that."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            link="See pickup options"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          <Info
            title="Coffee delivered. Day made."
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            link="Order now"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>
    </div>
  );
}

export default HomeScreen;
