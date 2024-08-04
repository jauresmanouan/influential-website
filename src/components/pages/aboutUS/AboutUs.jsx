import Navbar from "../home/navbar/Navbar.jsx";
import Footer from "../home/Footer.jsx";
import CallToAction from "../home/CallToAction.jsx";
import WhoWeAre from "./WhoWeAre.jsx";
import Cards from "../../reusable-ui/Cards.jsx";
import { team } from "./team.js";
import VisionAndObjectif from "./VisionAndObjectif.jsx";
import WhatWeDid from "./WhatWeDid.jsx";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <WhoWeAre />
      <VisionAndObjectif />
      <WhatWeDid />
      <div className="bg-turquoise">
        <Cards
          array={team}
          title={"Notre équipe 💪🏾"}
          className={"h-full ml-20 mr-20"}
        />
      </div>
      <CallToAction text={"Faire partie de l’équipe"} button={true} />
      <Footer />
    </div>
  );
}
