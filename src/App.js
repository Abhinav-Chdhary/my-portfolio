import React from "react";
import Bio from "./Components/Bio";

function App() {
  return (
    <div className="">
      <header className=" fw-bold display-1 py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">My Portfolio</span>
        </div>
      </header>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>"Condensing fact from the vapor of nuance"</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Juanita, <cite title="Source Title">Snow Crash</cite>
        </figcaption>
      </figure>
      <div className="container">
        <Bio />
      </div>
    </div>
  );
}

export default App;
