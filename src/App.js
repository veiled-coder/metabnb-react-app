import React, { useState } from "react";
import "../src/styles/styles.css";
import Nav from "./Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Place from "./components/Place";

function App() {
  const overlay = {
    background: "rgba(64, 64, 64, 0.3)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 6,
  };
  const modal = {
    position: "fixed",
    background: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 6,

    width: "50%",
    height: "50%",
    display: 'flex',
    flexDirection: 'column',
    padding:'1rem'
  };
  const [showModal, setshowModal] = useState(false);
  return (
    <Router>
      <>
        {showModal ? (
          <div style={overlay}>
            <div style={modal}>
              <button onClick={() => setshowModal(false)}>CLOSE MODAL</button>
            </div>
          </div>
        ) : (
          ""
        )}
        <Nav setshowModalTrue={() => setshowModal(true)} />
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
