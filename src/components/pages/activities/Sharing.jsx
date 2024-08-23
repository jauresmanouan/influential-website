import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Activity from "./Activity";

export default function Baume() {
  return (
    <>
      <Navbar />
      <Activity
        image="public/images/activities/Sharing.png"
        title="Sharing experience 🧩"
        hash="LHGZ:=s:029?qCJO9Xr^,{nmn3t7"
      />
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </>
  );
}
