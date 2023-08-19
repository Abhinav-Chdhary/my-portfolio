import React from "react";
import Bio from "../Components/Bio";
import Quote from "../Components/Quote";
import Carousel from "../Components/Carousel";

function App() {
  return (
    <div>
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
