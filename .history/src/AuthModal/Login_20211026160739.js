import React from 'react'

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
            
        </div>
    )
}

export default Login
