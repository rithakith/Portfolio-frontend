import React from 'react';

const SkillsModal = ({ isOpen, onClose, onSubmit, skill, error }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Skill</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Skill Name</label>
            <input
              type="text"
              defaultValue={skill?.skillName} // Pre-fill with current skill data
              className="border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Skill Level</label>
            <select
              defaultValue={skill?.level} // Pre-fill with current skill level
              className="border border-gray-300 p-2 rounded-lg"
            >
              <option value="" disabled>Select skill level</option>
              <option value="expert">Expert</option>
              <option value="advanced">Advanced</option>
              <option value="intermediate">Intermediate</option>
              <option value="beginner">Beginner</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Stack</label>
            <select
              defaultValue={skill?.stack} // Pre-fill with current stack
              className="border border-gray-300 p-2 rounded-lg"
            >
              <option value="" disabled>Select stack</option>
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
            Update Skill
          </button>
        </form>
        <button onClick={onClose} className="text-gray-600 mt-4">Close</button>
      </div>
    </div>
  );
};

export default SkillsModal;
