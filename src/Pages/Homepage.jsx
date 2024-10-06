// src/pages/Homepage.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../Components/Hero";
import Layout from "../Components/Layout";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import Competitions from "../Components/Competitions";
import Volunteering from "../Components/Volunteering";
import Blogs from "../Components/Blogs";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 200,
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Education  />
      <Skills id="skills-qualifications" />
      <Competitions id="competitions" />
      <Projects id="projects-achievements" />
      <Blogs id="blogs" />
      <Volunteering id="volunteering" />
      <Contact id="contact" />
    </Layout>
  );
};


export default Homepage;
