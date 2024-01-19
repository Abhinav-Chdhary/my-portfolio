import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-950 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; 2024 Abhinav Choudhary. All rights reserved.
        </p>
        <p className="mt-2">
          Connect with me:{" "}
          <a
            href="https://www.linkedin.com/in/abhinavchdhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Abhinav-Chdhary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="mailto:abhinavchdhary@gmail.com"
            className="text-blue-400 hover:underline"
          >
            Email
          </a>
        </p>
      </div>
    </div>
  );
}
