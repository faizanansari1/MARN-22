import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const options = [
    {
      text: "Products",
      routePath: "/",
    },
    {
      text: "Add Product",
      routePath: "/add",
    },

    {
      text: "Update Product",
      routePath: "/update",
    },
    {
      text: "Logout",
      routePath: "/logout",
    },
    {
      text: "Profile",
      routePath: "/profile",
    },
    {
      text: "Sign Up",
      routePath: "/signup",
    },
    {
      text: "login",
      routePath: "/signin",
    },
  ];
  return (
    <div>
      <ul className="nav-ui">
        {options.map((item) => (
          <li key={item.text}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.routePath}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
