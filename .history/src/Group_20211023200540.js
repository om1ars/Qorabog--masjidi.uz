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
        slidesToScroll: 1
    }
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
      {person.map((p) => )}
      </Slider>
    </div>
  );
}

export default Group;
