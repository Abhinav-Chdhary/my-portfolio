import React from "react";

export default function ClaircoClone() {
  return (
    <div>
      <div
        className="fs-2 text-center"
        style={{ "font-family": "'Permanent Marker', cursive" }}
      >
        Clairco-Clone
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide container myCarousel p-2 mt-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco1.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco2.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco3.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco4.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco5.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco6.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco7.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco8.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://raw.githubusercontent.com/Abhinav-Chdhary/my-portfolio/main/public/clairco9.png"
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
      <div></div>
    </div>
  );
}
