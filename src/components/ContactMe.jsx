//service_kz36odt
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kz36odt",
        "template_h2od0rf",
        form.current,
        "y3RyWxgsJ48z6erxD"
      )
      .then(
        (result) => {
          const responseText = result.text;
          console.log(responseText);

          if (responseText === "OK") {
            notifySuccess("Email sent successfully!");
          } else {
            notifyError("Error sending email. Please try again later.");
          }
        },
        (error) => {
          console.log(error.text);
          notifyError("Error sending email. Please try again later.");
        }
      );
  };
  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000, // Close the notification after 3 seconds
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000, // Close the notification after 3 seconds
    });
  };

  return (
    <div className="my-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-4 text-center my-2 flex justify-center">
        Contact Me
        <picture className="mx-2">
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif"
            alt="😎"
            width="32"
            height="32"
          />
        </picture>
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-5 md:mx-auto"
      >
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
