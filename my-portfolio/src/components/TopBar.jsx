import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function TopBar() {
  return (
    <header className="bg-gradient-to-r from-blue-950 via-blue-600 to-white p-4 text-white">
      <div className=" flex justify-around">
        <span className="text-4xl p-2">My Portfolio</span>
        <div>
          <a
            href="https://github.com/Abhinav-Chdhary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gray-950 hover:bg-gray-800 text-white p-2 rounded-md m-2">
              <BsGithub size={32} />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/abhinavchdhary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-md m-2">
              <BsLinkedin size={32} />
            </button>
          </a>
          <a
            href="https://abhinav-choudhary.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-md m-2">
              <FaItchIo size={32} />
            </button>
          </a>
          <a
            href="https://leetcode.com/Megh_nad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" bg-yellow-500 hover:bg-black text-white p-2 rounded-md m-2">
              <SiLeetcode size={32} />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
