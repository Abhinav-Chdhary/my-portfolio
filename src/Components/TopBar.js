import React from "react";

export default function TopBar() {
  return (
    <div className="sticky-top">
      <header className=" bg-dark text-light fw-bold display-1 py-3 mb-4 border-bottom dagger">
        <div className=" container d-flex flex-wrap justify-content-center">
          <div
            className="fs-1"
            style={{ "font-family": "'Permanent Marker', cursive" }}
          >
            My Portfolio
          </div>
        </div>
      </header>
    </div>
  );
}
