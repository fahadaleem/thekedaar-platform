import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroArea from "./components/HeroArea";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroArea />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default App;
