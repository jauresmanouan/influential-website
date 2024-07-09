import { useState } from "react";
import { Context } from "../../../context/Context";
import NavBar from "./navbar/NavBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const valueContext = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <Context.Provider value={valueContext}>
      <NavBar />
    </Context.Provider>
  );
}
