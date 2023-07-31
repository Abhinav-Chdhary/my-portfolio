import React from "react";

export default function TopBar() {
  return (
    <div>
      <header className="position-sticky bg-dark text-light fw-bold display-1 py-3 mb-4 border-bottom dagger">
        <div className="container d-flex flex-wrap justify-content-center">
          <div
            className="fs-1"
            style={{ "font-family": "'Permanent Marker', cursive" }}
          >
            My Portfolio
          </div>
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
    </div>
  );
}
