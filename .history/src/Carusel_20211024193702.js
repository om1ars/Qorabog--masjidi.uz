import React from "react";
import { Carousel } from "react-bootstrap";
import madina from "./assets/madina.jpg";
import masjid1 from './assets/masjid1.jpg'
import masjid2 from './assets/masjid2.jpg'
import masjid3 from './assets/masjid3.jpg'
import masjid4 from './assets/masjid4.jpg'
import masjid5 from './assets/masjid5.jpg'
import masjid6 from './assets/masjid6.jpg'
import masjid7 from './assets/masjid7.jpg'
import masjid8 from './assets/masjid8.jpg'
import masjid9 from './assets/masjid9.jpg'
import masjid10 from './assets/masjid9.jpg'
import masjid11 from './assets/masjid9.jpg'

export const Carusel = () => {
  return (
      <div style={{ width: "90%", margin: "auto", alignItems: "center" }}>
        <Carousel>
          <Carousel.Item interval={5000} onPause>
            <img className="d-block w-100" src={masjid1} alt="First slide" style={{borderRadius: 12}} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} onPause>
            <img className="d-block w-100" src={masjid7} alt="First slide" style={{borderRadius: 12}} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} onPause>
            <img className="d-block w-100" src={masjid2} alt="Second slide" style={{borderRadius: 12}} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={masjid3} alt="Third slide" style={{borderRadius: 12}} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
};
