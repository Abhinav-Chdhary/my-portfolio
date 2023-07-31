import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Bio() {
  return (
    <div
      className="border border-3 border-dark shadow-lg p-3 mb-5 bg-body rounded"
      style={{
        backgroundImage: "url('https://source.unsplash.com/iE71-TMrrkE')",
      }}
    >
      <div
        className="m-4 card border border-dark shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title fw-bold">Abhinav Choudhary</h5>
          <h6 className="card-subtitle mb-2 text-muted">CS Student</h6>
          <p className="card-text">
            Hello & welcome to my portfolio website! Here, I proudly present my
            collection of personal projects that I'm excited to share with you.
            I sincerely hope you find them inspiring.
          </p>

          <a href="https://github.com/Abhinav-Chdhary" className="card-link">
            <button type="button" class="btn btn-outline-dark rounded-circle">
              <BsGithub />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/abhinavchdhary/"
            className="card-link"
          >
            <button type="button" class="btn btn-outline-primary">
              <BsLinkedin />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
