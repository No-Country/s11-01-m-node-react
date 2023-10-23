import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Header from "./assets/Header/Header";
import Recipies from "./Pages/Home/Recipies";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route exact path="/results" element={<Recipies />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={''} />
        <Route exact path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
