import React from "react";

export default function Seneca() {
  return (
    <div className="container">
      <div
        className="fs-2 text-center"
        style={{ "font-family": "'Permanent Marker', cursive" }}
      >
        Seneca-avatar
      </div>
      <div className="container d-flex forMobile flex-row-reverse">
        <div
          id="senecaControls"
          className="carousel slide container myCarousel p-2 mt-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/Seneca1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/Seneca2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/Seneca3.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#senecaControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#senecaControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container my-3">
          <div
            className="fs-4"
            style={{ "font-family": "'Permanent Marker', cursive" }}
          >
            Features:
          </div>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Search suggestions
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Chakra UI
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            CRUD operations
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            External APIs
          </button>
          <div
            className="fs-4"
            style={{ "font-family": "'Permanent Marker', cursive" }}
          >
            Future Work
          </div>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Real-time generation
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            AI model integration
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Contextual conversations
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Brain emulation
          </button>
        </div>
      </div>
    </div>
  );
}
