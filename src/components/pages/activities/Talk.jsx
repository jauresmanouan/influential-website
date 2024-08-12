import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";
import { easeInOut, motion } from "framer-motion";

export default function Baume() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      >
        <Navbar />
        <Activity
          image={"public/images/activities/Talk.png"}
          title={"Free Virtual Talk 🎙️"}
        />
        <CallToAction
          text={"Restez informés de nos activités"}
          button={false}
        />
      </motion.div>
      <Footer />
    </>
  );
}
