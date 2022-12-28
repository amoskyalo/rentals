import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms and conditions" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
