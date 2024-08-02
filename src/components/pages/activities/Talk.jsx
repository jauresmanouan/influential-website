import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";

export default function Baume() {
  return (
    <div>
      <Navbar />
      <Activity
        image={"public/images/activities/Talk.png"}
        title={"Free Virtual Talk 🎙️"}
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </div>
  );
}
