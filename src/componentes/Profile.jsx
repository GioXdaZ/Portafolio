import React from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import "../App.css";
import "./Background.css";

// icons
import { ReactIcon } from "../assets/ReactIcon";
import { ViteIcon } from "../assets/ViteIcon";
import { TailwindIcon } from "../assets/TailwindIcon";

export const Profile = () => {
  return (
    <div>
      <Navbar />

      <div className="profile-container flex flex-col justify-center items-center py-20">
        <div className="profile-text flex flex-col py-12 gap-8">
          <div className="name flex justify-center font-black text-4xl">
            Giovanni Dazarola Horta
          </div>
          <div className="nickname flex justify-center font-black text-3xl">
            GioXdaZ
          </div>
          <div className="bio flex flex-col justify-center items-center text-justify text-xl gap-2">
            <p>
              Me embarque en el mundo de la programación por la motivasión que
              me contagio mi hermano.
            </p>
            <p>
              Le he dedicado todo un año de esfuerzo a aprender de cursos tanto
              de Udemy como tutoriales y guías de YouTube.
            </p>
            <p>
              En el proceso he aprendido a usar herramientas desde cero, tanto
              en versiones antiguas como actuales.
            </p>
            <p>
              Estoy encaminado a aprender nuevos frameworks para ir mejorando en
              la calidad de mi código.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center items-center">
        <div className="stacks-container flex flex-row gap-20 justify-center items-center py-20">
          <div className="title-stacks flex flex-col gap-4">
            <div className="flex justify-center items-center text-xl font-black">
              Mis Stacks
            </div>
            <div className="flex flex-col justify-center items-center text-xl">
              <p>Esta es la experiencia que he</p>
              <p>logrado tener a lo largo de mi</p>
              <p>proceso de aprendizaje.</p>
            </div>
            <div className="flex flex-col justify-center items-center text-xl">
              <p>Lo importante es lograr un</p>
              <p>resultado satisfactorio, lo</p>
              <p>que me motiva a seguir aprendiendo</p>
              <p>nuevas formas de mejorar.</p>
            </div>
          </div> 

          <div className="flex-stacks flex flex-row gap-4">
            <div className="stacks">
              <ReactIcon />
            </div>
            <div className="stacks">
              <TailwindIcon />
            </div>
            <div className="stacks">
              <ViteIcon />
              <div></div>
            </div>
          </div>
        </div>
      </div>*/}

      <Footer />
    </div>
  );
};
