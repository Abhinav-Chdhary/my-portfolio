import React from "react";
import avatarImage from "../assets/SitePhoto.jpg";

export default function AboutMe() {
  return (
    <div className="bg-blue-950">
      <div className="p-8 flex flex-col md:flex-row justify-around container mx-auto">
        <div className="flex-1 justify-center">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me 👋</h2>
          <p className="text-gray-200 mx-auto">
            Hi there! I'm Abhinav Choudhary, a passionate developer who loves
            creating awesome web applications. I have experience with front-end
            technologies like React and enjoy exploring new technologies to
            enhance my skillss.
          </p>
          <p className="text-gray-200 mt-2">
            In my free time, I enjoy solving coding challenges, making games,
            and staying up-to-date with the latest trends in the tech world.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={avatarImage}
            alt="Avatar"
            className="rounded-full object-cover w-full md:w-64 h-auto my-2 md:mb-0 shadow-md shadow-white/70 hover:shadow-white hover:shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
