import { Close } from "@material-ui/icons";
import React from "react";
import "./Add.css";

export const Add = () => {
  return (
    <div className="add__container">
      <div className="close">
        <Close />
      </div>
      <span>
          Masjidda namozin ado eting va jannatdan joyingizni band qilib quying
      </span>
    </div>
  );
};
