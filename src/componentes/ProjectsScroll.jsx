import "../App.css";
import React, { useRef } from "react";

// images
import Gifstar from "../../public/images/Gifstar.png";
import Pokedex from "../../public/images/Pokedex.png";
import TerrorFiles from "../../public/images/TerrorFiles.png";
import InConstruction1 from "../../public/images/working.gif";
import InConstruction2 from "../../public/images/working2.webp";

export const ProjectsSroll = () => {
  const ref = useRef(null);

  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center mt-56 mb-80"
    >
      <div>
        <h1 className="card-title font-extrabold text-4xl py-4">PROJECTS</h1>
      </div>
      <div className="sroll-container flex justify-center items-center">
        <ul ref={ref}>
          <li>
            <div className="flex flex-col justify-center items-center py-8">
              <a href="https://gifstar.netlify.app/" target="_blank">
                <img src={Gifstar} alt="gifstar" className="scale-95" />
              </a>
            </div>
          </li>
          <li>
            <div className="flex flex-col justify-center items-center py-8">
              <a
                href="https://pokedex-hoenn-version.netlify.app/"
                target="_blank"
              >
                <img src={Pokedex} alt="pokedex" className="scale-95" />
              </a>
            </div>
          </li>
          <li>
            <div className="flex flex-col justify-center items-center py-8">
              <a href="https://terrorfiles.netlify.app/" target="_blank">
                <img src={TerrorFiles} alt="terrorfiles" className="scale-95" />
              </a>
            </div>
          </li>
          <li>
            <div className="flex flex-col justify-center items-center font-extrabold text-4xl py-24">
              <img src={InConstruction1} alt="in-construction" />
              In contruction...
            </div>
          </li>
          <li>
            <div className="flex flex-col justify-center items-center font-extrabold text-4xl py-24">
              <img src={InConstruction2} alt="in-construction" />
              In contruction...
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
