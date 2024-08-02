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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pro-bono" element={<ProBono />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
