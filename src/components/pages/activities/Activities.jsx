import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import CardsActivties from "./CardsActivties";
import { easeInOut, motion } from "framer-motion";

export default function Activities() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <CardsActivties />
      </motion.div>
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </>
  );
}
