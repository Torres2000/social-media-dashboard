"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/index.jsx";
import Section1 from "@/components/Section1/index.jsx";
import Section2 from "@/components/Section2/index.jsx";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  //<button onClick={toggleDarkMode}>Cambiar</button>
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Section1 darkMode={darkMode} />
      <Section2 darkMode={darkMode} />
    </>
  );
}
