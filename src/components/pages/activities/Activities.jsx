import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import CardsActivties from "./CardsActivties";

export default function Activities() {
  return (
    <div>
      <Navbar />
      <CardsActivties />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </div>
  );
}
