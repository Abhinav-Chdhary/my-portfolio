import React from "react";

export default function ClaircoClone() {
  return (
    <div className="container">
      <div
        className="fs-2 text-center"
        style={{ fontFamily: "'Permanent Marker', cursive" }}
      >
        Clairco-Clone
      </div>
      <div className="container d-flex forMobile">
        <div
          id="carouselExampleControls"
          className="carousel slide container myCarousel p-2 mt-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco3.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco4.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco5.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco6.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco7.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco8.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://abhinav-chdhary.github.io/my-portfolio/clairco9.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container my-3">
          <div
            className="fs-4"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Features:
          </div>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Login/Logout
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Admin side
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Customer side
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Create new building
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Create new company
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Update real time
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Weather-air quality
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Route security
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            Edit Modal
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            CRUD operations
          </button>
          <button type="button" className="btn btn-outline-dark mx-1 my-1">
            External APIs
          </button>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}
