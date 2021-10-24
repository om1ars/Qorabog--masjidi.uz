import React from "react";
import { Carousel } from "react-bootstrap";
import madina from "./assets/madina.jpg";
import masjid1 from './assets/masjid.jpg'

export const Carusel = () => {
  return (
      <div style={{ width: "90%", margin: "auto", alignItems: "center" }}>
        <Carousel>
          <Carousel.Item interval={5000} onPause>
            <img className="d-block w-100" src={madina} alt="First slide" style={{borderRadius: 12}} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000} onPause>
            <img className="d-block w-100" src={madina} alt="Second slide" style={{borderRadius: 12}} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={madina} alt="Third slide" style={{borderRadius: 12}} />
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
