import React from "react";

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
    </div>
  );
};
