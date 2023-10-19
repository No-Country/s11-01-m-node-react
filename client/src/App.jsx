import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Header from "./assets/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={''} />
        <Route exact path="/" element={<Landing />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
