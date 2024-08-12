import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Form from "./Form";
import { easeInOut, motion } from "framer-motion";

export default function JoinUs() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <Form />
        <CallToAction text={"Laissez vous tenter par l’aventure"} />
        <Footer />
      </motion.div>
    </>
  );
}
