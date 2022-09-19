import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { singinUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getLoading } from "../redux/selector";
import { ScreenLoader } from "../common";

const SignIn = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSuccess = (res) => res && navigate("/");
  const onSubmit = (e) => {
    e.preventDefault();
    disptach(singinUser({ email, password, onSuccess }));
  };

  return (
    <>
      {isLoading && <ScreenLoader />}
      <form onSubmit={onSubmit}>
        <div className="register">
          <h1>Sign In</h1>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button type="submit">Login</button>
          <p className="already-account">
            have'nt account? <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignIn;
