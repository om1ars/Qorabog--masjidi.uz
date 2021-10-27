import React, {useState} from "react";
import { MasjidState } from "../store/Context";
import MuiAlert from "@material-ui/lab/Alert";

function Alert() {
  const { alert, setAlert } = MasjidState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ open: false });
  };
  return (
    <div>
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          elevation={10}
          variant="filled"
          severity={alert.type}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Alert;
