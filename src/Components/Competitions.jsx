import React, { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/competitions`
        );
        const data = await response.json();
        setCompetitions(data);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      }
    };

    fetchCompetitions();
  }, []);

  return (
    <div className="competitions-container  text-white p-8 min-h-screen flex flex-col justify-center">
      <h2 className="text-5xl text-center text-pink-500 font-bold mb-24">
        Highlights
      </h2>
      <div className="competitions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-40 gap-6 lg:px-48">
        {competitions.map((competition, index) => (
          <div
            key={competition.id}
            className="competition-card bg-gradient-to-b from-colors-pink-1 border-colors-pink-1 border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in" // Add AOS attribute for zoom-in
            data-aos-delay={`${index * 100}`} // Stagger animation based on index
          >
            <img
              src={`${import.meta.env.VITE_API_URL}/${competition.image}`}
              alt={competition.name}
              className="w-full h-64 object-cover rounded-t-lg mb-4 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold text-pink-500">
              {competition.name}
            </h3>
            <p className="text-gray-300 text-lg text-center mt-2">
              {competition.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
