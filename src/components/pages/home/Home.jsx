import { useState } from "react";
import { Context } from "../../../context/Context";
import Hero from "./Hero";
import Content from "./Content";
import Testimonies from "./testimonies/Testimonies";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import NavBar from "./navbar/NavBar";
import Cards from "./News/Cards";
import { news } from "./News/newdata";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const valueContext = {
    isOpen,
    setIsOpen,
  };

  return (
    <Context.Provider value={valueContext}>
      <NavBar />
      <Hero />
      <Content />
      <Cards array={news} title={"News 🗞️"} />
      <Testimonies />
      <CallToAction
        text={"Laissez vous tenter par l’aventure 🚀"}
        button={true}
      />
      <Footer />
    </Context.Provider>
  );
}
