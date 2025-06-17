import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import LetterGlitch from "./components/LetterGlitch.jsx";
import "./App.css";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
      </div>
      <Navbar />
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSection />
      </div>
    </div>
  );
}

export default App;
