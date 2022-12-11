import { Routes, Route } from "react-router";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
