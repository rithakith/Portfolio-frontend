import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const result = await response.json();
        setBlogs(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-pink-600 text-center">Loading...</p>;
  if (error) return <p className="text-pink-600 text-center">Error: {error}</p>;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen " id="blogs">
      <h2 className="text-5xl font-bold text-center text-pink-600 mb-24 mt-24">
        Blogs
      </h2>

      {/* Flashy Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-28 md:px-16 lg:px-40">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="relative group flex flex-col bg-black border border-pink-600 rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-[0_0_10px_1px] hover:scale-105 hover:shadow-pink-500"
            data-aos="zoom-in" // Add AOS animation
            data-aos-delay={`${index * 100}`} // Staggered delay for animation
          >
            {/* Blog Image on Top */}
            {blog.image && (
              <img
              src={`${import.meta.env.VITE_API_URL}/${blog.image}`}                alt={blog.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-500"
              />
            )}
        

            <div className="p-6 flex flex-col flex-1 bg-gradient-to-t from-pink-600 via-black to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl text-white font-bold mb-4 transition-colors">
                {blog.title}    
              </h3>
              <p className="text-white text-opacity-80 mb-4 flex-grow">
                {blog.content}
              </p>

              {/* Social Links Fixed at the Bottom */}
              <div className="flex space-x-4 mt-auto">
                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border-colors-pink-1 bg-black p-2 border rounded-md hover:text-white transition-colors duration-300"
                  >
                    Read More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;