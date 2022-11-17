import React from "react";
import { Link } from "react-scroll";

// icons
import { Linkedin } from "../assets/LinkedinIcon";
import { GitHub } from "../assets/GitHubIcon";

export const Footer = () => {
  return (
    <div id="contact" className="footer-container flex flex-col">
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-8 scale-150">
            <a
              href="https://github.com/GioXdaZ"
              target="_blank"
              className="scale-150 hover:bg-red-700 hover:rounded-full"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/giovanni-dazarola-horta-a3268490/"
              target="_blank"
              className="scale-150 hover:bg-red-700 hover:rounded-sm"
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="text-xl">
          <p>Copyright © 2022 - All right reserved by GioXdaZ</p>
        </div>
      </footer>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        className="btn btn-primary btn-circle mx-auto mt-8 mb-8 w-16 h-16 hover:btn-error hover:scale-150"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z" />
        </svg>
      </Link>
    </div>
  );
};
