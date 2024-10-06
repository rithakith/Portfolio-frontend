import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";

const ChatbotPage = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const url = new URL("http://localhost:8000/chat/");
      url.searchParams.append("query", query);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      setResponse(result);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Sorry, there was an error processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-gray-800 to-gray-700 text-white p-6">
            <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-white bg-gray-800 p-2 rounded-lg"
      >
        Go Back
      </button><h2 className="text-4xl font-bold mb-8">Upload PDF</h2>
      <form
        action="http://localhost:8000/upload/"
        encType="multipart/form-data"
        method="post"
        className="mb-8 flex flex-col items-center"
      >
        <input type="file" name="file" className="mb-4 p-2 border rounded-lg text-black" />
        <input
          type="submit"
          value="Upload"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out"
        />
      </form>
      <h2 className="text-4xl font-bold mb-4">Ask Questions About Your PDF</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col items-center space-y-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows="4"
          placeholder="Enter your question here..."
          className="w-full p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {response && (
        <div className="mt-6 w-full max-w-lg bg-white text-black p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Response:</h3>
          <p><Markdown>{response}</Markdown></p>
        </div>
      )}
    </div>
  );
};

export default ChatbotPage;
