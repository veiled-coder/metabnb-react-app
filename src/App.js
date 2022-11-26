import React, { useState } from "react";
import "../src/styles/styles.css";
import Nav from "./Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Place from "./components/Place";
import Modal from "./components/Modal";

function App() {
 
  const [showModal, setshowModal] = useState(false);

   
  return (
    <Router>
      <>
   
        <Modal modalState={showModal} setshowModalFalse={()=>setshowModal(false)} />
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
