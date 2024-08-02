import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./features/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Events from "./features/Events/Events";
import ProBono from "./features/ProBono/ProBono";
import Sponsors from "./features/Sponsors/Sponsors";
import Resources from "./features/Resources/Resources";
import Calendar from "./features/Calendar/Calendar";
import ContactUs from "./features/ContactUs/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/pro-bono" element={<ProBono />} />
          <Route exact path="/sponsors" element={<Sponsors />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
