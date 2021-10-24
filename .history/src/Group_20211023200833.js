import { ArrowLeft, ArrowRight, FormatQuote } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { person } from "./GroupData";
import Slider from "react-slick";

function Group() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {person.map((p) => {

            const {last, name, id, career}
          return (
            <div className="container__person">
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Group;
