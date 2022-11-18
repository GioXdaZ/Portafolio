import React from "react";
import { Link } from "react-router-dom";

// logo
import { LogoGioXdaZ } from "../assets/LogoGioXdaZ";

export const Navbar = ({ id }) => {
  return (
    <div
      id="nav"
      className="navbar-container flex justify-center items-center fixed top-0 left-0 right-0 z-10"
    >
      <div className="navbar bg-base-300 bg-opacity-75">
        <Link to={"/"} className="mx-auto" id="cursor">
          <LogoGioXdaZ />
        </Link>
      </div>
    </div>
  );
};
