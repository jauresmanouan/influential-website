import { useState } from "react";
import { Context } from "../../../context/Context";
import Hero from "./Hero";
import Content from "./Content";
import Testimonies from "./testimonies/Testimonies";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import NavBar from "./navbar/NavBar";
import CardList from "./News/CardList";
import { News } from "./News/News";

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
      <Content />
      <CardList array={News} title={"News 🗞️"} />
      <Testimonies />
      <CallToAction
        text={"Laissez vous tenter par l’aventure 🚀"}
        button={true}
      />
      <Footer />
    </Context.Provider>
  );
}
