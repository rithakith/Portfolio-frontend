import React, { useEffect, useState, useCallback } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";

const ProjectList = () => {
  const initialFormState = {
    title: "",
    description: "",
    githubLink: "",
    linkedinLink: "",
    image: "", // New field for image
  };

  const [projects, setProjects] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState(initialFormState);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch projects data from the server
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/projects");
      console.log(response)
      if (!response.ok) throw new Error("Failed to fetch projects");
      const result = await response.json();
      console.log(result)
      setProjects(result);
   
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Handle editing a project
  const handleEdit = (project) => {
    setEditItem(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      githubLink: project.githubLink,
      linkedinLink: project.linkedinLink,
      image: project.image, // Populate image field
    });
    setShowModal(true);
    setIsEditing(true);
  };

  // Handle deleting a project
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete project");

      setProjects((prevData) => prevData.filter((project) => project._id !== id));
    } catch (error) {
      setError("Error deleting project: " + error.message);
    }
  };

  // Handle creating a new project
  const handleCreateNew = () => {
    setFormData(initialFormState);
    setShowModal(true);
    setIsEditing(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (formDataToSubmit) => {
    const url = isEditing
      ? `http://localhost:3000/projects/${editItem}`
      : "http://localhost:3000/projects";
    const method = isEditing ? "PUT" : "POST";
  
    try {
      const response = await fetch(url, {
        method,
        body: formDataToSubmit, // Use formDataToSubmit instead of JSON.stringify
        headers: {
          // Do not set Content-Type explicitly; it will be automatically set when using FormData
          // 'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error("Failed to save project");
  
      setShowModal(false);
      await fetchProjects();
    } catch (error) {
      setError("Error saving project: " + error.message);
    }
  };
  

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 p-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white bg-gray-800 p-2 rounded-lg"
      >
        Go Back
      </button>
      <h1 className="text-6xl py-7 font-bold mb-4 text-center text-white">Projects</h1>

      <div className="text-center mb-6">
        <button
          onClick={handleCreateNew}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Create New
        </button>
      </div>

      {Array.isArray(projects) && projects.length > 0 ? (
        <div className="flex flex-col gap-6 items-center">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white text-black w-full max-w-lg p-6 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-black hover:text-gray-700 transition"
                  aria-label={`Edit ${project.title}`}
                >
                  <PencilIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="text-black hover:text-red-700 transition"
                  aria-label={`Delete ${project.title}`}
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-gray-500">GitHub: {project.githubLink}</p>
              <p className="text-gray-500">LinkedIn: {project.linkedinLink}</p>
              {project.image && (
                <img
                  src={`http://localhost:3000/${project.image}`}
                  alt={project.title}
                  className="w-full h-auto rounded-lg mt-4"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white text-center">No projects available</div>
      )}

      {showModal && (
        <ProjectForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default ProjectList;
