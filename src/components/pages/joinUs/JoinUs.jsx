import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Navbar from "../home/navbar/Navbar";
import Form from "./Form";

export default function JoinUs() {
  return (
    <div>
      <Navbar />
      <Form />
      <CallToAction text={"Laissez vous tenter par l’aventure"} />
      <Footer />
    </div>
  );
}
