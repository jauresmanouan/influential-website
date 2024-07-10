import { useState } from "react";
import { Context } from "../../../context/Context";
import NavBar from "./navbar/NavBar";
import Hero from "./Hero";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const valueContext = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <Context.Provider value={valueContext}>
      <NavBar />
      <Hero />
    </Context.Provider>
  );
}
