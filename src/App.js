import React, { useState } from "react";
import "../src/styles/styles.css";
import Nav from "./Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Place from "./components/Place";
import Modal from "./components/Modal";
import { createContext } from "react";

export const thetruecontext = createContext();

function App() {
  const [showModal, setshowModal] = useState(false);

  const trueboolean = function funcTrue() {
    setshowModal(true);
  };
  return (
    <Router>
      <>
        <Modal
          modalState={showModal}
          setshowModalFalse={() => setshowModal(false)}
        />
        <thetruecontext.Provider value={trueboolean}>
          <Nav />
        </thetruecontext.Provider>

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/place" element={<Place />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
