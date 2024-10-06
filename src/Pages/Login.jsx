import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,password);

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
        console.log("Successfully logged in");
        navigate('/mydashboard')
    }
    if (response.status === 401) {
        console.log("Invalid user");
    }

    console.log(response);
  };
  return (
    <>
      <div className="flex items-center  bg-gradient-to-bl from-sky-500 to-sky-800 justify-center min-h-screen p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl text-center font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit} method="post" className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit" 
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
