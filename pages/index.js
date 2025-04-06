import AboutPage from "@/components/about/aboutPage";
import HomePage from "@/components/home/homePage";
import ProjectPage from "@/components/projects/projectPage";
import SkillsPage from "@/components/skills/skills";
import React from "react";

const InitalPage = () => {
  return (
    <>
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="projects">
        <ProjectPage />
      </div>
      <div id="skills">
        <SkillsPage />
      </div>
    </>
  );
};

export default InitalPage;
