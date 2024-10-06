import React, { useState } from "react";

const BlogForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setShowModal,
}) => {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("title", formData.title);
    if (imageFile) {
      formDataToSubmit.append("image", imageFile); // Correctly append the image file
    }
    
    console.log("FormData to Submit", formDataToSubmit);
    await handleSubmit(formDataToSubmit); // Pass the FormData object for submission
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        {/* <h2 className="text-2xl font-bold mb-4">
          {formData.title ? "Edit Blog" : "Create New Blog"}
        </h2> */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        
          <div>
            <label className="block text-gray-700">Image Upload</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;