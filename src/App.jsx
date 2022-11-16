import React from "react";
import "./App.css";

// backgroud
import "../src/componentes/Background.css";

// componentes
import { Navbar } from "./componentes/Navbar";
import { ProjectsSroll } from "./componentes/ProjectsScroll";
import { Footer } from "./componentes/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between w-auto h-screen">
      <Navbar />

      <div className="body-container">
        <ProjectsSroll />
      </div>
      <Footer />
    </div>
  );
}

export default App;
