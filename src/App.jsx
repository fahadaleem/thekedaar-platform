import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Services from "./components/Services";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar />
      <HeroArea />
      <Services />
      <About />
    </>
  );
}

export default App;
