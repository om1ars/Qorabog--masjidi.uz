import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { MasjidState } from "../store/Context";
import { Box, Button, TextField } from "@material-ui/core";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const { alert, setAlert } = MasjidState();
  
    const handleSubmit = async () => {
    if (password !== confirmPassword) {
        setAlert({
          open: true,
          message: "Passwords do not match",
          type: "error",
        });
        return;
      }
  
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        setAlert({
          open: true,
          message: 'Sign  up succesfully',
          type: 'success'
        })
        console.log(result);
  
  
        // handleClose()
      } catch(error){
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        })
        console.log(error, 'errro')}
  
  
    };
  

  return <div>

<Box
        p={3}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <TextField
          variant="outlined"
          type="email"
          label="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="Password"
          label="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <TextField
          variant="outlined"
          type="password"
          label="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />
        <Button
          onClick={handleSubmit}
          variant="outlined"
          style={{ backgroundColor: "#eebc1d" }}
        >
          Kiris
        </Button>
      </Box>
  </div>;
};

export default Signup;
