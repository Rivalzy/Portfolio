import { Routes, Route } from "react-router-dom";

// import components
import Header from "./components/Navbar/Header";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Conctact";
import Footer from "./components/Footer";

const App = () => {

const klik = () => {
  return alert('Pesan Terkirim');
}

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact click={klik} />} />
      </Routes>
      <Footer />
      <div style={{ height: "full" }}></div>
    </>
  );
};

export default App;
