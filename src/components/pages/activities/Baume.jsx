import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";

export default function Baume() {
  return (
    <>
      <Navbar />
      <Activity
        image="/images/activities/Baume.png"
        title="Baume de gratitude 🙏🏾"
        hash="LC8O#WI;3?-TLMs:jFWBM{bH#lR*"
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </>
  );
}
