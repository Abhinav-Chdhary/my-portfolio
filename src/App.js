import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import Homepage from "./Screens/Homepage";
const basename = process.env.NODE_ENV === "development" ? "/" : "/my-portfolio";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
