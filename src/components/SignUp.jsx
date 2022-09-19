import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions";
import { ScreenLoader } from "../common";
import { getLoading } from "../redux/selector";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getLoading);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSuccess = (res) => res && navigate("/signin");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    dispatch(registerUser({ name, email, password, onSuccess }));
  };
  return (
    <>
      {isLoading && <ScreenLoader />}

      <form onSubmit={onSubmit}>
        <div className="register">
          <h1>Registeration</h1>
          <input
            required
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            required
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button type="submit">Register</button>
          <p className="already-account">
            already account? <Link to="/signin">Signin</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
