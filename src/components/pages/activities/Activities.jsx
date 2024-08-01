import CallToAction from "../home/CallToAction";
import Footer from "../home/Footer";
import Cards from "../home/News/Cards";
import NavBar from "../home/navbar/NavBar";
import { activities } from "./activities";

export default function Activities() {
  return (
    <div>
      <NavBar />
      <div className="h-[90rem] flex flex-col justify-center items-center">
        <h1 className="font-montserrat font-extrabold text-center text-4xl sm:text-7xl">
          Nous menons 5 <br />
          différentes <span className="text-fushia">activités</span> 🤩
        </h1>
        <Cards array={activities} />
      </div>
      <CallToAction text={"Restez informés de nos activités"} button={false} />
      <Footer />
    </div>
  );
}
