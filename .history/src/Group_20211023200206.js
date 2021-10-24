import { ArrowLeft, ArrowRight, FormatQuote } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { person } from "./GroupData";
import './Group.css'


function Group() {


        return (
          <article className={position} key={id}>
            <img src='' alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{name}</p>
            <p className="text">{last}</p>
            <FormatQuote className="icon" />
          </article>
        );
      })}

      <div>
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowRight />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
}

export default Group;
