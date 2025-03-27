import React from "react";
import dwelloWeb from "@/public/projects/dwello.png";
import ParallaxProjectCard from "../parallaxProjectCard/parallaxProjectCard";
import { projectPageStyles } from "./projectPageStyles";
import Image from "next/image";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "Dwello",
      about:
        "Dwello is a real estate platform that helps users buy, sell, and explore properties with detailed insights. It offers property listings with real-time updates, advanced search filters, and location-based recommendations. The website is designed to provide a seamless experience for home buyers by integrating interactive maps, virtual property tours, and expert guidance. It connects buyers with verified developers and agents, ensuring a transparent and hassle-free property search. The platform focuses on user-friendly navigation, fast-loading pages, and mobile responsiveness, making real estate transactions easier and more efficient.",
      url: "https://dwello.in",
      technologies: ["nextjs", "javascript", "reactjs", "styled-jsx", "axios"],
      image: dwelloWeb,
    },
    {
      id: 2,
      title: "Dwello",
      about:
        "Dwello is a real estate platform that helps users buy, sell, and explore properties with detailed insights. It offers property listings with real-time updates, advanced search filters, and location-based recommendations. The website is designed to provide a seamless experience for home buyers by integrating interactive maps, virtual property tours, and expert guidance. It connects buyers with verified developers and agents, ensuring a transparent and hassle-free property search. The platform focuses on user-friendly navigation, fast-loading pages, and mobile responsiveness, making real estate transactions easier and more efficient.",
      url: "https://dwello.in",
      technologies: ["nextjs", "javascript", "reactjs", "styled-jsx", "axios"],
      image: dwelloWeb,
    },
  ];
  return (
    <>
      <style jsx>{projectPageStyles}</style>
      <div className={"projectsSection"}>
        <h2 className={"title"}>Projects</h2>
        <div className={"projectsContainer"}>
          {projects.map((project, index) => (
            <div>
              <div>
                <div>
                  <div>{project?.title}</div>
                  <div>{project?.about}</div>
                </div>
                <div>
                  <div>Live view</div>
                  {project?.technologies?.map((tech, index) => (
                    <div key={index}>{tech}</div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src={project?.image}
                  width={300}
                  height={200}
                  alt={project?.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
