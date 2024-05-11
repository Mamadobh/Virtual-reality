import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./page/landing_page/Landing";
import React from "react";
import Company from "./page/company/Company";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="company" element={<Company/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
