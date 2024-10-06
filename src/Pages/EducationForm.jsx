import React from "react";

const EducationForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  setShowModal,
}) => {
  const { institute, startYear, endYear, duration, description } = formData;

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        <h2 id="modal-title" className="text-2xl font-bold mb-4">
          {institute ? "Edit Education" : "Add new Education"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Institute</label>
            <input
              type="text"
              name="institute"
              value={institute}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Start Year</label>
            <input
              type="text"
              name="startYear"
              value={startYear}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">End Year</label>
            <input
              type="text"
              name="endYear"
              value={endYear}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />{" "}
          </div>{" "}
          <div className="flex justify-end gap-4">
            {" "}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              {" "}
              Cancel{" "}
            </button>{" "}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              {" "}
              Save{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
export default EducationForm;