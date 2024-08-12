import { useState } from "react";
import { Context } from "../../../context/Context";
import Hero from "./Hero";
import Content from "./Content";
import Testimonies from "./testimonies/Testimonies";
import Footer from "./Footer";
import CallToAction from "./CallToAction";
import Cards from "../../reusable-ui/Cards";
import { news } from "./News/newdata";
import Navbar from "./navbar/Navbar";
import { easeInOut, motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const valueContext = {
    isOpen,
    setIsOpen,
  };

  return (
    <Context.Provider value={valueContext}>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <Hero />
        <Content />
        <Cards
          array={news}
          title={"News"}
          tv={true}
          className={"flex justify-center items-center"}
        />
        <Testimonies />
        <CallToAction
          text={"Laissez vous tenter par l’aventure"}
          icon={true}
          button={true}
        />
      </motion.div>
      <Footer />
    </Context.Provider>
  );
}
