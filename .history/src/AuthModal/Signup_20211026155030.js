import React, { useState } from "react";
import { MasjidState } from "../store/Context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { aert, setAlert } = MasjidState();

  const handlesubmit = async () => {};

  return <div></div>;
};

export default Signup;
