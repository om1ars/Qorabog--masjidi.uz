import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import "./Add.css";

export const Add = () => {
    const [close, setClose] = useState(true)

    const handleClose = () => {
        setClose(false)
    }
  return (
      <>
  {close && ()}
  );
};
