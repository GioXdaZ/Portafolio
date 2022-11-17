import React from "react";
import { Link } from "react-scroll";

// logo
import { LogoGioXdaZ } from "../assets/LogoGioXdaZ";

export const Navbar = () => {
  return (
    <div
      id="nav"
      className="navbar-container flex justify-center items-center fixed top-0 left-0 right-0 z-10"
    >
      <div className="navbar bg-base-300 bg-opacity-75">
        <div className="mx-auto">
          <LogoGioXdaZ />
        </div>
      </div>
    </div>
  );
};
