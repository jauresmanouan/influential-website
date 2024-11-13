import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";
import { easeInOut, motion } from "framer-motion";

export default function Baume() {
  return (
    <>
      <Navbar />
      <Activity
        image="/images/activities/Talk.png"
        title="Free Virtual Talk 🎙️"
        hash="LNFYP,_3_Nt8xso}Rin$DiMxRij["
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </>
  );
}
