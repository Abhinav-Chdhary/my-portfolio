import React from "react";
import HPP from "../assets/HousingPricePredictor.png";
import ARCADE from "../assets/Arcade.jpg";
import IMMUNO from "../assets/Immuno.jpg";
import { TiLocationArrowOutline } from "react-icons/ti";

export default function Projects() {
  return (
    <div className="container mx-auto max-w-4xl p-8">
      <h2 className="text-3xl font-bold mb-4 my-2 flex myHeading">
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
      <div className="mb-8 flex flex-col-reverse md:flex-row proImg">
        <div>
          <h2 className="text-2xl font-bold myHeading">
            Housing price predictor
            <span className="arrow">
              <TiLocationArrowOutline />
            </span>
          </h2>
          <h3 className="font-semibold text-gray-400 text-sm md:text-lg">
            Sept, 2023 - Oct, 2023
          </h3>
          <p className="pr-2">
            Deployed a basic AI model using Flask for the backend, Python
            notebook for the model, and React-Chakra.ui for the frontend to
            predict median housing prices. I learned to use predefined libraries
            like Chakra.ui, create a Flask backend, and package/deploy a machine
            learning model for a web app, building end-to-end AI solution.
          </p>
        </div>
        <img
          src={HPP}
          alt="Housing Price Predictor Image"
          className="rounded object-cover w-48 md:w-48 h-auto my-2 md:mb-0 mx-auto md:mr-3 shadow-md shadow-blue-950/70 hover:shadow-blue-950 hover:shadow-lg"
        />
      </div>

      <div className="mb-8 flex flex-col-reverse md:flex-row proImg">
        <div>
          <h2 className="text-2xl font-bold myHeading">
            Hack-o-holic-2.0
            <span className="arrow">
              <TiLocationArrowOutline />
            </span>
          </h2>
          <h3 className="text-sm md:text-lg font-semibold text-gray-400">
            24 Nov, 2023
          </h3>
          <p className="pr-2">
            A collection of mini-games curated for mentally challenged kids. We
            made this for hack-o-holic hackathon 2023. It was a 24-hour
            hackathon. Our team made it into the top 10.
          </p>
        </div>
        <img
          src={ARCADE}
          alt="Arcade game image"
          className="rounded object-cover w-48 md:w-48 h-auto my-2 md:mb-0 mx-auto md:mr-3 shadow-md shadow-blue-950/70 hover:shadow-blue-950 hover:shadow-lg"
        />
      </div>
      <div className="mb-8 flex flex-col-reverse md:flex-row proImg">
        <div>
          <h2 className="text-2xl font-bold myHeading shining-text">
            Immuno Game
            <span className="arrow">
              <TiLocationArrowOutline />
            </span>
          </h2>
          <h3 className="text-sm md:text-lg font-semibold text-gray-400">
            January, 2023 - February, 2023
          </h3>
          <p className="pr-2">
            Engaged in the "My First Game Jam: Winter 2023," centered around the
            theme "Growth," marking my inaugural participation in a game jam.
            The highlight was playtesting fellow creators’ games and fostering
            interactive discussions.
          </p>
        </div>
        <img
          src={IMMUNO}
          alt="Immuno Game Image"
          className="rounded object-cover w-48 md:w-48 h-auto my-2 md:mb-0 mx-auto md:mr-3 shadow-md shadow-blue-950/70 hover:shadow-blue-950 hover:shadow-lg"
        />
      </div>
    </div>
  );
}
