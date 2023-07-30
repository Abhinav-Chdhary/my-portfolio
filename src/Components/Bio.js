import React from "react";

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
          <h5 className="card-title">Abhinav Choudhary</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Computer Science Student
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
          <a href="https://github.com/Abhinav-Chdhary" className="card-link">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/abhinavchdhary/"
            className="card-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
