import React, { useEffect, useState, useCallback } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import EducationForm from "./EducationForm";

const AllEducation = () => {
  const initialFormState = {
    institute: "",
    startYear: "",
    endYear: "",
    duration: "",
    description: "",
  };

  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/education");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result.response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleEdit = (item) => {
    setEditItem(item._id);
    setFormData({
      institute: item.institute,
      startYear: item.startYear,
      endYear: item.endYear,
      duration: item.duration,
      description: item.description,
    });
    setShowModal(true);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/education/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");

      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      setError("Error deleting: " + error.message);
    }
  };

  const handleCreateNew = () => {
    setFormData(initialFormState);
    setShowModal(true);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditing
      ? `http://localhost:3000/education/${editItem}`
      : "http://localhost:3000/education";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to save data");

      setShowModal(false);
      await fetchData();
    } catch (error) {
      setError("Error saving data: " + error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white bg-gray-800 p-2 rounded-lg"
      >
        Go Back
      </button>
      <h1 className="text-6xl py-7 font-bold mb-4 text-center text-white">
        Education Cards
      </h1>

      <div className="text-center mb-6">
        <button
          onClick={handleCreateNew}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Create New
        </button>
      </div>

      {Array.isArray(data) && data.length > 0 ? (
        <div className="flex flex-col gap-6 items-center">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white text-black w-full max-w-lg p-6 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-black hover:text-gray-700 transition"
                  aria-label={`Edit ${item.institute}`}
                >
                  <PencilIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-black hover:text-red-700 transition"
                  aria-label={`Delete ${item.institute}`}
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.institute}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-500">Start Year: {item.startYear}</p>
              <p className="text-gray-500">End Year: {item.endYear}</p>
              <p className="text-gray-500">Duration: {item.duration}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white text-center">No data available</div>
      )}

      {showModal && (
        <EducationForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default AllEducation;
