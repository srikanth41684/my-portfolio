import AboutPage from "@/components/about/aboutPage";
import HomePage from "@/components/home/homePage";
import ProjectPage from "@/components/projects/projectPage";
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
      
    </>
  );
};

export default InitalPage;
