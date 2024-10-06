import React, { useEffect, useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import SkillsModal from '../Components/ui/SkillsModal';

const AllSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentSkill, setCurrentSkill] = useState(null); // Store the skill being edited

  // Fetch skills from the server
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:3000/skills");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSkills(data.response);
      } catch (err) {
        setError("Failed to fetch skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Handle delete skill
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/skills/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSkills(skills.filter(skill => skill._id !== id)); // Update the state to remove the deleted skill
        console.log('Skill deleted successfully');
      } else {
        console.log('Failed to delete skill');
      }
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  // Handle edit skill
  const handleEdit = (skill) => {
    setCurrentSkill(skill); // Set the skill to be edited
    setIsModalOpen(true); // Open the modal
  };

  // Handle form submission in the modal
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("skillName", e.target[0].value);
    formData.append("level", e.target[1].value);
    formData.append("stack", e.target[2].value);

    try {
      const response = await fetch(`http://localhost:3000/skills/${currentSkill._id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        console.log("Skill updated successfully");
        // Update the skills state to reflect the changes
        const updatedSkill = await response.json();
        setSkills(skills.map(skill => (skill._id === updatedSkill._id ? updatedSkill : skill)));
      } else {
        console.log("Failed to update skill");
      }
    } catch (error) {
      console.error("Error updating skill:", error);
    } finally {
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  return (
    <div className="skills-container p-6">
      <h1 className="text-2xl font-bold mb-4">All Skills</h1>
      <ul className="space-y-4">
        {skills.map(skill => (
          <li key={skill._id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
            <div>
              <h2 className="text-xl font-semibold">{skill.skillName}</h2>
              <p>Level: {skill.level}</p>
              <p>Stack: {skill.stack}</p>
              {skill.imageUrl && <img src={`/${skill.imageUrl}`} alt={skill.skillName} className="w-16 h-16 mt-2 rounded" />} {/* Display skill image */}
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleEdit(skill)} 
                className="text-blue-500 hover:text-blue-700"
              >
                <PencilIcon className="h-6 w-6" />
              </button>
              <button 
                onClick={() => handleDelete(skill._id)} 
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className='h-6 w-6'/>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for editing skill */}
      <SkillsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        skill={currentSkill}
        error={error}
      />
    </div>
  );
};

export default AllSkills;
