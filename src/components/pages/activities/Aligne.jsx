import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";

export default function Aligne() {
  return (
    <>
      <Navbar />
      <Activity
        image="/images/activities/Aligne.png"
        title="Aligné(e) 🤸🏽"
        hash="LEC7m4bc3?M{JFaKoJWAcskCvfkC"
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </>
  );
}
