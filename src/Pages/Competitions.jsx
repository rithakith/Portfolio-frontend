import React, { useState } from 'react';

const Competitions = () => {
  const [competitionName, setCompetitionName] = useState('');
  const [description, setDescription] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState(null);
  const [formError, setFormError] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!competitionName || !description || !position) {
      setFormError('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('competitionName', competitionName);
    formData.append('description', description);
    formData.append('position', position);

    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:3000/competitions', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Competition created successfully');
        // Optionally reset form after submission
        setCompetitionName('');
        setDescription('');
        setPosition('');
        setImage(null);
      } else {
        console.log('Failed to create competition');
      }
    } catch (error) {
      console.error('Error creating competition:', error);
    }
  };

  return (
    <div className="competitions-container p-6 bg-gradient-to-r from-pink-500 to-blue-500 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Create Competition</h1>
      {formError && <p className="text-red-300">{formError}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
        {/* Competition Name Input */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Competition Name</label>
          <input
            type="text"
            value={competitionName}
            onChange={(e) => setCompetitionName(e.target.value)}
            placeholder="Enter competition name"
            className="border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Description Input */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter competition description"
            className="border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Position Input */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter position"
            className="border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Image Upload Input */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Image Upload</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Create Competition
        </button>
      </form>
    </div>
  );
};

export default Competitions;
