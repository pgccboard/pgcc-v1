import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./features/Navbar/Navbar";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Events from "./features/Events/Events";
import Consulting from "./features/Consulting/Consulting";
import Sponsors from "./features/Sponsors/Sponsors";
import Resources from "./features/Resources/Resources";
import Calendar from "./features/Calendar/Calendar";
import ContactUs from "./features/ContactUs/ContactUs";

import {
  ABOUT,
  CALENDAR,
  CONTACTUS,
  EVENTS,
  CONSULTING,
  RESOURCES,
  SPONSORS,
} from "./pgccConstants";

import "./App.css";
import MailList from "./features/MailList/MailList";
import Footer from "./features/Footer/Footer";
import Modal from "./features/Modal/Modal";
import { useSelector } from "react-redux";
import { selectModalState } from "./features/Modal/ModalSlice";

function App() {
  const modalState = useSelector(selectModalState);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="py-16 bg-custom-large bg-top-wave bg-no-repeat">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/${ABOUT}`} element={<About />} />
            <Route path={`/${EVENTS}`} element={<Events />} />
            <Route path={`/${CONSULTING}`} element={<Consulting />} />
            <Route path={`/${SPONSORS}`} element={<Sponsors />} />
            <Route path={`/${RESOURCES}`} element={<Resources />} />
            <Route path={`/${CALENDAR}`} element={<Calendar />} />
            <Route path={`/${CONTACTUS}`} element={<ContactUs />} />
          </Routes>
          <MailList />
        </div>
        {modalState && <Modal />}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
