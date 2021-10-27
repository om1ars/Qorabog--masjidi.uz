import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { MasjidState } from "../store/Context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { aert, setAlert } = MasjidState();

  const handlesubmit = async () => {
      if(passsword !== confirmPassword){
          setAlert({
            open: true,
            message: "Passwords do not match",
            type: "error",
          }) 
          return;
      }

      try {

        const result = await createUserWithEmailAndPassword(auth, email, password)
      } catch (error)  { console.log(error)} 



  };

  return <div></div>;
};

export default Signup;
