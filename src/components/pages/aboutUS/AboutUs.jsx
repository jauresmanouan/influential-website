import Navbar from "../home/navbar/Navbar.jsx";
import Footer from "../home/Footer.jsx";
import CallToAction from "../home/CallToAction.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import Cards from "../../reusable-ui/Cards.jsx";
import { team } from "./team.js";
import VisionAndObjectif from "./VisionAndObjectif.jsx";
import WhatWeDid from "./WhatWeDid.jsx";
import { easeInOut, motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <WhoWeAre />
        <VisionAndObjectif />
        <WhatWeDid />
        <div className="bg-turquoise overflow-hidden flex flex-col justify-center items-center">
          <Cards
            array={team}
            title={"Notre équipe"}
            team={true}
            className={"md:ml-20 md:mr-20 mb-10"}
          />
        </div>
        <CallToAction text={"Faire partie de l’équipe"} button={true} />
        <Footer />
      </motion.div>
    </>
  );
}
