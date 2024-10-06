import React, { useEffect, useState, useRef } from "react";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const cardsRef = useRef([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/skills`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSkillsData(data.response);
      } catch (err) {
        setError("Failed to fetch skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Categorize skills based on stack type
  const categorizeSkills = (stack) => {
    return skillsData.filter((skill) => skill.stack === stack);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    cardsRef.current.forEach((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add("visible");
        } else {
          card.classList.remove("visible");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial call to handleScroll in case elements are already in view
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="min-h-screen flex flex-col py-16 text-white" id="skills">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-5xl text-center text-pink-500 font-bold mb-12">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <SkillSection
            title="Frontend"
            skills={categorizeSkills("frontend")}
            ref={el => (cardsRef.current[0] = el)}
          />
          {/* Backend Skills */}
          <SkillSection
            title="Backend"
            skills={categorizeSkills("backend")}
            ref={el => (cardsRef.current[1] = el)}
          />
          {/* Database Skills */}
          <SkillSection
            title="Database"
            skills={categorizeSkills("database")}
            ref={el => (cardsRef.current[2] = el)}
          />
          {/* Design Skills */}
          <SkillSection
            title="Design"
            skills={categorizeSkills("design")}
            ref={el => (cardsRef.current[3] = el)}
          />
          {/* Other Skills */}
          <SkillSection
            title="Other"
            skills={categorizeSkills("other")}
            ref={el => (cardsRef.current[4] = el)}
          />
        </div>
      </div>
    </section>
  );
};

// Skill Section Component
const SkillSection = React.forwardRef(({ title, skills }, ref) => (
  <div className="flex flex-col h-full skill-section" ref={ref} >
    <div className="w-full border border-colors-pink-1 py-8 px-6 rounded-2xl bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 hover:scale-105 transform transition-transform duration-300 ease-out shadow-lg hover:shadow-2xl flex flex-col h-full">
      <h3 className="text-4xl text-center text-colors-pink-1 font-bold mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  </div>
));

// Skill Card Component
const SkillCard = ({ skill }) => {
  // Map skill levels to numeric values
  const levelMapping = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  // Convert skill.level to numeric value
  const levelValue = levelMapping[skill.level] || 1; // Default to 1 if the level is not found

  return (
    <div className="flex flex-col items-center hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      <img
  src={`${import.meta.env.VITE_API_URL}/${skill.imageUrl}`}
  alt={skill.skillName}
        className="w-12 h-12 object-cover shadow-lg mb-2"
      />
    </div>
  );
};

export default Skills;
