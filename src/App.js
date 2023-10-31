import "./App.css";
import Home from "./router/home/Home";
import Discover from "./router/discover/Discover";
import LifeStyle from "./router/lifeStyle/LifeStyle";
import Phone from "./router/phone/Phone";
import SmartHome from "./router/smartHome/SmarHome";
import Support from "./router/support/Support";
import NotFound from "./router/notFound/NotFound";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/global" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/smartHome" element={<SmartHome />} />
        <Route path="/lifeStyle" element={<LifeStyle />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
