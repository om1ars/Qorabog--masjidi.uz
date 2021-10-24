import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import "./Add.css";

export const Add = () => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(false);
  };
  return (
    
        <div className="add__container">
          <div className="close">
            <Close pnClick={handleClose} />
          </div>
          <span>
            Masjidda namozin ado eting va jannatdan joyingizni band qilib
            quying(InshaAllah)
            
          </span>
        </div>
  
  );
};
