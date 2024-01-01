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
        style={{ width: "20rem" }}
      >
        <div className="card-body">
          <h5 className="card-title fw-bold">Abhinav Choudhary</h5>
          <h6 className="card-subtitle mb-2 text-muted">CS Student</h6>
          <p className="card-text">
            Hello & welcome to my portfolio website! I’m Abhinav, a passionate
            computer science student with a dream of becoming a tech wizard. My
            fascination with technology began at a young age, and it has been a
            thrilling journey ever since. I believe that through innovation and
            creativity, we can shape a better and more connected world.
          </p>
        </div>
      </div>
    </div>
  );
}
