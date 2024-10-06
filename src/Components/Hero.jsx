import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animation will trigger again when scrolling
      mirror: true, // Animation triggers on scroll up as well
    });
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen"
      id="hero"
    >
      <h1
        className="relative z-10 text-colors-pink-1 text-center text-5xl md:text-7xl font-bold"
        data-aos="fade-up"
      >
        I’m Rithara Kithmanthie
      </h1>
      <p
        className="relative z-10 text-colors-lightpink text-lg md:text-2xl mt-4 mx-4 md:mx-96 text-center"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        An IT undergraduate of University of Moratuwa. When I'm not coding,
        you'll catch me watching anime or reading a manga 😎
      </p>

      <div className="flex justify-center space-x-6 mt-14" data-aos-delay="400">
        {/* Grab my CV Button */}
        <button
          data-aos="fade-up"
          data-aos-duration="500"
          className="relative p-5 pl-16 pr-16 text-colors-black-1 font-bold rounded-full overflow-hidden btn bg-gradient-to-r from-colors-pink-1 to-pink-400 hover:from-pink-400 hover:to-colors-pink-1 hover:scale-105 transform transition-transform duration-300 ease-out shadow-lg"
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

        {/* Contact Me Button */}
        <button
          data-aos="fade-up"
          data-aos-duration="500"
          className="relative p-5 pl-16 pr-16 text-colors-pink-1 border-colors-pink-1 border-2 font-bold rounded-full overflow-hidden btn bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 hover:scale-105 transform transition-transform duration-300 ease-out shadow-lg"
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
