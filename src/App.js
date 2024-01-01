import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import Homepage from "./Screens/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
