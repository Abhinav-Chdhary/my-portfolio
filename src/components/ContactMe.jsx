import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMe() {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
    }
  };

  const validateForm = () => {
    let errors = {};

    // Validate user_name
    if (!formData.user_name.trim()) {
      errors.user_name = "Name is required";
    }

    // Validate user_email
    if (!formData.user_email.trim()) {
      errors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errors.user_email = "Invalid email address";
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if there are no errors
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
              formErrors.user_name && "border-red-500"
            }`}
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Enter your name"
            value={formData.user_name}
            onChange={handleInputChange}
          />
          {formErrors.user_name && (
            <p className="text-red-500 text-xs italic">
              {formErrors.user_name}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
              formErrors.user_email && "border-red-500"
            }`}
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formData.user_email}
            onChange={handleInputChange}
          />
          {formErrors.user_email && (
            <p className="text-red-500 text-xs italic">
              {formErrors.user_email}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
              formErrors.message && "border-red-500"
            }`}
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500 text-xs italic">{formErrors.message}</p>
          )}
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
