import React from "react";
import "../src/styles/styles.css";
import Nav from "./Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Place from "./components/Place";

function App() {
  return (
    <Router>
      <>
        <Nav />
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
