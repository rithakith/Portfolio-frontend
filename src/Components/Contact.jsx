import React, { useEffect } from "react";
import Footer from "./ui/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Contact = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center py-12" data-aos="fade-up">
        <div className="max-w-lg w-full p-4 shadow-2xl rounded-xl">
          <h2 className="text-5xl font-bold text-center text-pink-600 mb-12">
            Contact Me
          </h2>
          <form className="flex flex-col space-y-6 mb-8">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg font-semibold text-white mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-lg font-semibold text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                required
              ></textarea>
            </div>
            <button className="relative p-5 pl-16 pr-16 text-colors-pink-1 border-colors-pink-1 border-2 font-bold rounded-md overflow-hidden btn bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 hover:scale-105 transform transition-transform duration-300 ease-out shadow-lg">
              <svg
                className="absolute inset-0"
                viewBox="0 0 200 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="198"
                  height="58"
                  rx="30"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="rounded"
                ></rect>
              </svg>
              Contact Me
            </button>
          </form>
          <p className="text-center text-gray-600 mb-6">
            Feel free to drop me a message, or I'll send a carrier pigeon!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/yourprofile"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=B30049"
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              <img
                src="https://img.icons8.com/?size=100&id=447&format=png&color=B30049"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              <img
                src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=B30049"
                alt="Gmail"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
