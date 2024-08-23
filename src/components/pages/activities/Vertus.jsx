import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";

export default function Baume() {
  return (
    <>
      <Navbar />
      <Activity
        image="public/images/activities/Vertus.png"
        title="Croissons en Vertus 🍀"
        hash="LRD,viR3GKyF02WBt7WZ?aWYVWem"
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </>
  );
}
