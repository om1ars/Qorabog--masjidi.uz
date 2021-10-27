import React from 'react'
import { signInWithEmailAndPassword } from "@firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAlert } = CryptoState();
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

        <Button
          onClick={handleSubmit}
          variant="outlined"
          style={{ backgroundColor: "#eebc1d" }}
        >
          Sign up
        </Button>
      </Box>
        </div>
    )
}

export default Login
