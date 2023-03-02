import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "../App.css";

export const MainPage = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center py-80 gap-8"
    >
      <div className="font-bold text-6xl">Welcome to my profile</div>
      <div className=" flex gap-16 text-4xl font-extrabold">
        <LinkRoll
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className="cursor-pointer hover:text-red-700 hover:scale-150"
        >
          Projects
        </LinkRoll>
        <LinkRoll
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={2000}
          className="cursor-pointer hover:text-red-700 hover:scale-150"
        >
          Contact
        </LinkRoll>
      </div>
      <Link
        to={"/profile"}
        id="profile"
        className="font-extrabold text-4xl hover:text-red-700 hover:scale-150"
      >
        Profile
      </Link>
    </div>
  );
};
