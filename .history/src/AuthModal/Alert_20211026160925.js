import React from 'react'

function Alert() {
    const { alert, setAlert } = CryptoState();

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
