import React from 'react'
import { MasjidState } from '../store/Context';
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
            
        </div>
    )
}

export default Alert
