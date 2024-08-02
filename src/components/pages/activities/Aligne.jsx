import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";

export default function Aligne() {
  return (
    <div>
      <Navbar />
      <Activity
        image={"public/images/activities/Aligne.png"}
        title={"Aligné(e) 🤸🏽"}
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </div>
  );
}
