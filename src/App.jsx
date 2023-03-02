import React from "react";
import { Link as LinkRoll } from "react-scroll";
import "./App.css";

// backgroud
import "../src/componentes/Background.css";

// componentes
import { Navbar } from "./componentes/Navbar";
import { MainPage } from "./componentes/MainPage";
import { ProjectsSroll } from "./componentes/ProjectsScroll";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between w-auto h-screen">
      <Navbar />
      <div className="main-container">
        <MainPage />
      </div>
      <div className="body-container">
        <ProjectsSroll />
      </div>
      <Footer />
      <LinkRoll
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={1000}
        className="bottom-btn btn btn-primary btn-circle mx-auto mt-8 mb-8 w-16 h-16 hover:btn-error hover:scale-150"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z" />
        </svg>
      </LinkRoll>
    </div>
  );
}

export default App;
