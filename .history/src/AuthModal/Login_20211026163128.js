import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { MasjidState } from "../store/Context";
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAlert } = MasjidState();
  const handleSubmit = async () => {
    if (email === "" || password === "") {
      setAlert({
        open: true,
        message: "Please fill in the fileds",
        type: "error",
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: 'Welcome',
        type: "success",
      });

    } catch (error) {
      
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      console.log(error, 'error')}
  };
    return (
        <div>
            <Box
        p={3}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <TextField
          variant="outlined"
          type="email"
          label="Email adresingiz"
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

        <Button
          onClick={handleSubmit}
          variant="outlined"
          style={{ backgroundColor: "#gree" }}
        >
          Ro'yhatdan o'tish
        </Button>
      </Box>
        </div>
    )
}

export default Login
