import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Navbar />
      <HeroArea />
      <Services />
    </>
  );
}

export default App;
