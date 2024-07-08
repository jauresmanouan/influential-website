import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/aboutUS/AboutUs.jsx";
import Activities from "./components/pages/activities/Activities.jsx";
import Home from "./components/pages/home/Home.jsx";
import JoinUs from "./components/pages/joinUs/JoinUs.jsx";
import Error404 from "./components/pages/error/Error404.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nos-activités" element={<Activities />} />
      <Route path="/nous-connaître" element={<AboutUs />} />
      <Route path="/nous-rejoindre" element={<JoinUs />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
