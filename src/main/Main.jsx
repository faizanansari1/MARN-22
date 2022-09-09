import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Footer, Nav } from "../common";
import { SignIn, SignUp } from "../components";
import "../App.css";

const Main = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Components</h1>} />
          <Route path="/add" element={<h1>Add Product Components</h1>} />
          <Route path="/update" element={<h1>Update Product Components</h1>} />
          <Route path="/logout" element={<h1>logout Components</h1>} />
          <Route path="/profile" element={<h1>Profile Components</h1>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Main;
