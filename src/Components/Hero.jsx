import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16"
      id="hero"
    >
      {/* Responsive Heading */}
      <h1
        className="relative z-10 text-colors-pink-1 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        data-aos="fade-up"
      >
        I’m Rithara Kithmanthie
      </h1>

      {/* Responsive Description */}
      <p
        className="relative z-10 text-colors-lightpink text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mx-2 md:mx-32 lg:mx-48 xl:mx-64 text-center"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        An IT undergraduate of University of Moratuwa. When I'm not coding,
        you'll catch me watching anime or reading a manga 😎
      </p>

      {/* Button Group */}
      <div
        className="flex flex-row justify-center space-x-4 mt-10 sm:mt-14"
        data-aos-delay="400"
      >
        {/* Grab my CV Button */}
        <a
          href="https://drive.google.com/file/d/1_GiBkW71g7Re7M2spjWdP_GBXpWghHVL/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            data-aos="fade-up"
            data-aos-duration="500"
            className="relative p-3 sm:p-5 px-8 sm:px-12 text-colors-black-1 font-bold rounded-full overflow-hidden btn bg-gradient-to-r from-colors-pink-1 to-pink-400 hover:from-pink-400 hover:to-colors-pink-1 hover:scale-105 transform transition-transform duration-300 ease-out shadow-lg"
          >
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
            Grab my CV
          </button>
        </a>

        {/* Contact Me Button */}
        <button
          data-aos="fade-up"
          data-aos-duration="500"
          className="relative p-3 sm:p-5 px-8 sm:px-12 text-colors-pink-1 border-colors-pink-1 border-2 font-bold rounded-full overflow-hidden btn bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 hover:scale-105 transform transition-transform duration-300 ease-out shadow-lg"
        >
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
      </div>
    </div>
  );
};

export default Hero;
