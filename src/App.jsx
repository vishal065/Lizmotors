import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { HeroOne } from "./Components/Hero";

function App() {
  return (
    <>
      <Navbar />
      {/* <HeroOne /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
