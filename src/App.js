import React from "react";
import Bio from "./Components/Bio";
import TopBar from "./Components/TopBar";
import Carousel from "./Components/Carousel";
import Quote from "./Components/Quote";

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
    </div>
  );
}

export default App;
