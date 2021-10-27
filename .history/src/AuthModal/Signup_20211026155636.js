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

        setAlert({
            open: true,
            message: 'Sign  up succesfully',
            type: 'success'
          })
          console.log(result);
    
      }  catch(error){
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        })
        console.log(error, 'errro')}



  };

  return <div></div>;
};

export default Signup;
