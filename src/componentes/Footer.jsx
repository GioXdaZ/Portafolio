import React from "react";

// icons
import { Linkedin } from "../assets/LinkedinIcon";
import { GitHub } from "../assets/GitHubIcon";

export const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="" target="_blank">
              <GitHub />
            </a>
            <a href="" target="_blank">
              <Linkedin />
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by GioXdaZ</p>
        </div>
      </footer>
    </div>
  );
};
