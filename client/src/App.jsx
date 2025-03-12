import React from "react";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router";
// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
