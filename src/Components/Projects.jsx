import React, { useEffect, useState } from "react";
import linkedinImg from "/linkedin.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const result = await response.json();
        setProjects(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleProjects((prev) => [...prev, entry.target.id]); // Add visible project ID
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    const projectElements = document.querySelectorAll(".project-card");
    projectElements.forEach((element) => observer.observe(element));

    return () => {
      projectElements.forEach((element) => observer.unobserve(element));
    };
  }, [projects]);

  if (loading) return <p className="text-pink-600 text-center">Loading...</p>;
  if (error) return <p className="text-pink-600 text-center">Error: {error}</p>;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 mt-4" id="projects">
      <h2 className="text-5xl font-bold text-center text-pink-600 mb-24">
        Projects
      </h2>

      {/* Flashy Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-8 lg:px-16">
        {projects.map((project, index) => (
          <div
            key={project._id}
            id={project._id} // Assign an ID for intersection observer
            className={`project-card relative group flex flex-col bg-black border border-pink-600 rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-[0_0_10px_1px] hover:scale-105 hover:shadow-pink-500 ${visibleProjects.includes(project._id) ? 'visible' : 'invisible'}`}
            data-aos="zoom-in" // Add AOS animation
            data-aos-delay={`${index * 100}`} // Staggered delay for animation
          >
            {/* Project Image on Top */}
            {project.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-500"
              />
            )}

            <div className="p-6 flex flex-col flex-1 bg-gradient-to-t from-pink-600 via-black to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl text-white font-bold mb-4 transition-colors">
                {project.title}
              </h3>
              <p className="text-white text-opacity-80 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Social Links Fixed at the Bottom */}
              <div className="flex space-x-4 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors"
                  >
                    <img src="/github.png" alt="" width={30} />
                  </a>
                )}
                {project.linkedinLink && (
                  <a
                    href={project.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white transition-colors"
                  >
                    <img src={linkedinImg} alt="" width={30} />
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

export default Projects;
