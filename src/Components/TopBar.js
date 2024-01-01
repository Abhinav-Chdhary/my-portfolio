import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function TopBar() {
  return (
    <header className="sticky-top bg-dark text-light fw-bold py-3 mb-4 border-bottom dagger">
      <div className=" d-flex flex-row justify-content-around">
        <span
          className="fs-1"
          style={{ "font-family": "'Permanent Marker', cursive" }}
        >
          My Portfolio
        </span>
        <div>
          <Link
            to="https://github.com/Abhinav-Chdhary"
            className="card-link"
            target="_blank"
          >
            <button type="button" className="btn btn-dark btn-lg">
              <BsGithub />
            </button>
          </Link>

          <Link
            to="https://www.linkedin.com/in/abhinavchdhary/"
            className="card-link"
            target="_blank"
          >
            <button type="button" className="btn btn-primary btn-lg ms-2">
              <BsLinkedin />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
