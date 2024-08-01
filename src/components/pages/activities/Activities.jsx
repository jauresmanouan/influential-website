import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import NavBar from "../home/navbar/NavBar";
import CardsActivties from "./CardsActivties";

export default function Activities() {
  return (
    <div>
      <NavBar />
      <CardsActivties />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </div>
  );
}
