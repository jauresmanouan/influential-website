import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/aboutUS/AboutUs.jsx";
import Activities from "./components/pages/activities/Activities.jsx";
import Home from "./components/pages/home/Home.jsx";
import JoinUs from "./components/pages/joinUs/JoinUs.jsx";
import Error404 from "./components/pages/error/Error404.jsx";
import Aligne from "./components/pages/activities/Aligne.jsx";
import Baume from "./components/pages/activities/Baume.jsx";
import Vertus from "./components/pages/activities/Vertus.jsx";
import Sharing from "./components/pages/activities/Sharing.jsx";
import Talk from "./components/pages/activities/Talk.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nos-activités" element={<Activities />} />
      <Route path="/nous-connaître" element={<AboutUs />} />
      <Route path="/nous-rejoindre" element={<JoinUs />} />
      <Route path="*" element={<Error404 />} />

      <Route path="/aligne" element={<Aligne />} />
      <Route path="/baume-de-gratitude" element={<Baume />} />
      <Route path="/croissons-en-vertus" element={<Vertus />} />
      <Route path="/sharing-experience" element={<Sharing />} />
      <Route path="/free-virtual-talk" element={<Talk />} />
    </Routes>
  );
}

export default App;
