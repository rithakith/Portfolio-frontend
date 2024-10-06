import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Volunteering = () => {
  const clubs = [
    {
      id: 1,
      name: "IEEE WIE",
      image: "/wie.png", // Placeholder image
    },
    {
      id: 2,
      name: "ROTARACT",
      image: "../../public/rotaract.png", // Placeholder image
    },
    {
      id: 3,
      name: "IEEE",
      image: "../../public/ieee.png", // Placeholder image
    },
    {
      id: 4,
      name: "INTECS",
      image: "../../public/intecs.png", // Placeholder image
    },
  ];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="volunteering-container  text-white p-8 min-h-screen flex flex-col items-center" id="passion">
      <h2 className="text-5xl text-center text-pink-500 font-bold mb-24 mt-24">
        Volunteering
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {clubs.map((club, index) => (
          <div
            key={club.id}
            className="club-card border bg-gradient-to-b from-black via-black to-colors-pink-1 border-colors-pink-1 rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center hover:scale-105 hover:bg-gradient-to-t from-black to-colors-pink-1"
            data-aos="zoom-in" // Add AOS animation
            data-aos-delay={`${index * 100}`} // Staggered delay for animation
          >
            <img
              src={club.image}
              alt={club.name}
              className="w-32 h-32 object-fill mb-4"
            />
            <h3 className="text-xl font-semibold text-white mt-4">
              {club.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
