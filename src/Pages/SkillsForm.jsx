import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillsForm = () => {
  const navigate = useNavigate();
  const [skillName, setSkillName] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState(null); // Change to handle image file
  const [stack, setStack] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!skillName || !level || !image || !stack) {
      setFormError("Please fill in all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("skillName", skillName);
    formData.append("level", level);
    formData.append("image", image); // Append image file
    formData.append("stack", stack);

    const response = await fetch("http://localhost:3000/option/skills/new", {
      method: "POST",
      body: formData,
    });

    if (response.status === 201) {
      console.log("Skill added successfully");
    } else {
      console.log("Failed to add skill");
    }

    // Reset form after submission
    setSkillName("");
    setLevel("");
    setImage(null);
    setStack("");
    setFormError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 animate-slideIn left-6 text-white bg-gray-800 p-2 rounded-lg"
      >
        Go Back
      </button>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Add a New Skill</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formError && <p className="text-red-500 text-center">{formError}</p>}

          {/* Skill Name Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Skill Name</label>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Enter skill name"
              className="border border-gray-300 p-2 rounded-lg"
            />
          </div>

          {/* Skill Level Select */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Skill Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
            >
              <option value="" disabled>
                Select skill level
              </option>
              <option value="expert">Expert</option>
              <option value="advanced">Advanced</option>
              <option value="intermediate">Intermediate</option>
              <option value="beginner">Beginner</option>
            </select>
          </div>

          {/* Image Upload Input */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Image Upload</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="border border-gray-300 p-2 rounded-lg"
            />
          </div>

          {/* Stack Select */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Stack</label>
            <select
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
            >
              <option value="" disabled>
                Select stack
              </option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="database">Database</option>
              <option value="design">Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Add Skill
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillsForm;
