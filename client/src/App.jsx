import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Header from "./assets/Header/Header";
import Recipies from "./Pages/Home/Recipies";
import Login from "./Pages/Login/Login";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path="/login" element={<Login />} />
          <Route exact path="/results" element={<Recipies />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
