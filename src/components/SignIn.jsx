import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SignIn = () => {
  const disptach = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onGetData = () => {
    console.log(email, password);
    toast.success("Suuscess");
  };
  return (
    <div className="register">
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button onClick={onGetData}>Login</button>
      <p className="already-account">
        have'nt account? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default SignIn;
