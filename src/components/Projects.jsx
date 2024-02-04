import React from "react";

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center my-2 flex justify-center myHeading">
        Projects
        <picture className="mx-2">
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif"
            alt="💡"
            width="32"
            height="32"
          />
        </picture>
      </h2>
    </div>
  );
}
