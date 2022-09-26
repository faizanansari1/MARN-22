import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { Footer, Nav } from "../common";
import { AddProduct, ProductList, SignIn, SignUp } from "../components";
import "../App.css";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Box height={"calc(100vh - 101px)"} overflow="auto">
        <ToastContainer
          position="bottom-center"
          hideProgressBar={false}
          autoClose={1000}
          // autoClose={false}
          // newestOnTop={true}
          draggable={false}
          rtl={false}
        />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<h1>Update Product Components</h1>} />
          <Route path="/logout" element={<h1>logout Components</h1>} />
          <Route path="/profile" element={<h1>Profile Components</h1>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
