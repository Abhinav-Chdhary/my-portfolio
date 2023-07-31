import React from "react";
import Bio from "./Components/Bio";
import TopBar from "./Components/TopBar";
import Carousel from "./Components/Carousel";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <Quote />
      <div className="container">
        <Bio />
        <hr />
      </div>
      <div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
