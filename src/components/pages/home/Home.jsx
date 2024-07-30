import { useState } from "react";
import { Context } from "../../../context/Context";
import NavBar from "./navbar/NavBar";
import Hero from "./Hero";
import Content from "./Content";
import News from "./News";
import Testimonies from "./testimonies/Testimonies";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const valueContext = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <Context.Provider value={valueContext}>
      {/* <NavBar />
      <Hero />
      <Content/> 
      <News/> */}
      <Testimonies/>
      {/* <CallToAction/>
      <Footer/> */}
    </Context.Provider>
  );
}
