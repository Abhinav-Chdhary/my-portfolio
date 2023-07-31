import React from "react";

export default function Quote() {
  return (
    <div>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>"Condensing fact from the vapor of nuance"</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Juanita, <cite title="Source Title">Snow Crash</cite>
        </figcaption>
      </figure>
    </div>
  );
}
