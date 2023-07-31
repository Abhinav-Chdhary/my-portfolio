import React from "react";

export default function Carousel() {
  return (
    <div className="container">
      <div
        className="fs-2 text-center my-2"
        style={{ "font-family": "'Permanent Marker', cursive" }}
      >
        My Projects
      </div>

      <div className="p-2 mb-4 fw-bold " id="myCarousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="%PUBLIC_URL%/imm1.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3
                  className="fw-bold"
                  style={{ "font-family": "'Permanent Marker', cursive" }}
                >
                  Immuno Game
                </h3>
                <p>Made for "My first game jam 2023 (Winter)"</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="%PUBLIC_URL%/fridayFoods.PNG"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h3
                  className="text-success"
                  style={{ "font-family": "'Permanent Marker', cursive" }}
                >
                  Friday Foods
                </h3>
                <p className="text-success bg-light ">A Food delivery app</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="%PUBLIC_URL%/Cdixon.PNG"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h3 style={{ "font-family": "'Permanent Marker', cursive" }}>
                  Personal blog web-app
                </h3>
                <p>A website to publish my writings.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
