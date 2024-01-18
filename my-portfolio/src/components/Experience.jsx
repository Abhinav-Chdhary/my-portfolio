import React from "react";
import GEUimg from "../assets/GEU.jpg";
import ClaircoImg from "../assets/Clairco.jpg";

const Experience = () => {
  return (
    <div className="bg-blue-950 p-8 text-white ">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Experience</h1>

        <div className="mb-8 flex flex-col-reverse md:flex-row">
          <img
            src={GEUimg}
            alt="GEU image"
            className="rounded-full object-cover w-full md:w-48 h-auto my-2 md:mb-0 mx-auto md:mx-2"
            style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.7)" }}
          />
          <div>
            <h2 className="text-2xl font-bold">Graphic Era University</h2>
            <h3 className="font-semibold text-gray-400 text-sm md:text-lg">
              CS Student | 2021-2025 | SCGPA: 8.47
            </h3>
            <p className="text-white">
              Dedicated Computer Science student with expertise in data
              structures, algorithms, cybersecurity, blockchain, game
              development and web development. Certified in Cloud computing,
              Frontend development, and AI. Passionate about continuous learning
              and active participation in computer science discussions.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-col-reverse md:flex-row">
          <img
            src={ClaircoImg}
            alt="Clairco Image"
            className="rounded-full object-cover w-full md:w-48 h-auto my-2 md:mb-0 mx-auto md:mx-2"
            style={{ boxShadow: "0 4px 8px rgba(255, 255, 255, 0.7)" }}
          />
          <div>
            <h2 className="text-2xl font-bold">Clairco</h2>
            <h3 className="text-sm md:text-lg font-semibold text-gray-400">
              Software Development Intern | Jun'23 - Aug'23
            </h3>
            <p className="text-white">
              Clairco (Aliferous Technologies Pvt Ltd) is a Bangalore based
              startup. As a Software Developer intern, I contributed to
              interactive applications using React, MongoDB, Express.js, and
              Node.js, gaining hands-on experience across the software
              development lifecycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
