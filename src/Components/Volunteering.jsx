import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import wieImg from "/wie.png"; // Import the image for IEEE WIE
import rotaractImg from "/rotaract.png"; // Import the image for ROTARACT
import ieeeImg from "/assets/ieee.png"; // Import the image for IEEE
import intecsImg from "/intecs.png"; // Import the image for INTECS

const Volunteering = () => {
  const clubs = [
    {
      id: 1,
      name: "IEEE WIE",
      image: wieImg, // Use imported image
    },
    {
      id: 2,
      name: "ROTARACT",
      image: rotaractImg, // Use imported image
    },
    {
      id: 3,
      name: "IEEE",
      image: ieeeImg, // Use imported image
    },
    {
      id: 4,
      name: "INTECS",
      image: intecsImg, // Use imported image
    },
  ];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="volunteering-container text-white p-8 min-h-screen flex flex-col items-center"
      id="passion"
    >
      <h2 className="text-5xl text-center text-pink-500 font-bold mb-24">
        Volunteering{" "}
      </h2>
      <div className="flex flex-wrap justify-center md:gap-8 gap-6 ">
        {clubs.map((club, index) => (
          <div
            key={club.id}
            className="club-card md:w-48 w-36 border bg-gradient-to-b from-black via-black to-colors-pink-1 border-colors-pink-1 rounded-lg md:p-6 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center hover:scale-105 hover:bg-gradient-to-t from-black to-colors-pink-1"
            data-aos="zoom-in" // Add AOS animation
            data-aos-delay={`${index * 100}`} // Staggered delay for animation
          >
            <img
              src={club.image}
              alt={club.name}
              className="w-24 h-24 object-fill mb-4" // Adjusted image size
            />
            <h3 className="md:text-lg text-sm font-semibold text-white mt-4">
              {club.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
