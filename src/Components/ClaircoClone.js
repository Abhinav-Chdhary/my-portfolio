import React from "react";

export default function ClaircoClone() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container myCarousel p-2"
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
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
