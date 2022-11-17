import React from "react";
import { Link } from "react-scroll";
import "../App.css";

export const MainPage = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center py-80 gap-8"
    >
      <div className="font-bold text-6xl">Welcome to my profile</div>
      <div className=" flex gap-16 text-4xl font-extrabold">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:text-red-700 hover:scale-150"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="hover:text-red-700 hover:scale-150"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
